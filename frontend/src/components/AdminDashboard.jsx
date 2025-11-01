import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

// 🔁 Define program options based on course type
const PROGRAM_OPTIONS = {
  SSC: ["Pre-9th", "9th", "10th"],
  Intermediate: ["F.Sc", "I.C.S", "I.COM", "F.A (IT)"],
  Cambridge: ["O&A Levels", "IGCSE"],
  "Short Course": ["Computer Basics", "Graphic Design", "Digital Marketing", "Web Development", "MS Office"],
};

const AdminDashboard = () => {
  const [inquiries, setInquiries] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [filterType, setFilterType] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});
  const navigate = useNavigate();

  // ✅ Fetch all inquiries
  useEffect(() => {
    const fetchInquiries = async () => {
      const token = localStorage.getItem("adminToken");
      if (!token) {
        navigate("/admin-login");
        return;
      }

      try {
        const res = await fetch("http://localhost:5000/api/inquiry", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.status === 401 || res.status === 403) {
          localStorage.removeItem("adminToken");
          navigate("/admin-login");
          return;
        }

        const result = await res.json();
        const data = result.data || result;
        setInquiries(data);
        setFiltered(data);
      } catch (error) {
        console.error("❌ Error fetching inquiries:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInquiries();
  }, [navigate]);

  // ✅ Delete Inquiry
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this inquiry?")) return;

    try {
      const token = localStorage.getItem("adminToken");
      const res = await fetch(`http://localhost:5000/api/inquiry/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error("Failed to delete inquiry");

      setFiltered(filtered.filter((inq) => inq._id !== id));
      setInquiries(inquiries.filter((inq) => inq._id !== id));
      alert("Inquiry deleted successfully ✅");
    } catch (error) {
      console.error("❌ Error deleting inquiry:", error);
      alert("Failed to delete inquiry ❌");
    }
  };

  // ✅ Start Editing
  const startEditing = (inq) => {
    setEditingId(inq._id);
    setEditForm({ ...inq });
  };

  // ✅ Save Edit
  const saveEdit = async () => {
    try {
      const token = localStorage.getItem("adminToken");
      const res = await fetch(
        `http://localhost:5000/api/inquiry/${editingId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(editForm),
        }
      );

      if (!res.ok) throw new Error("Failed to update inquiry");

      const updated = await res.json();
      const updatedInquiry = updated.data || updated; // handle both formats
      const newList = inquiries.map((inq) =>
        inq._id === editingId ? updatedInquiry : inq
      );

      setInquiries(newList);
      setFiltered(newList);
      setEditingId(null);
      alert("Inquiry updated successfully ✅");
    } catch (error) {
      console.error("❌ Error updating inquiry:", error);
      alert("Failed to update inquiry ❌");
    }
  };

  // ✅ Filter
  const handleFilter = (type) => {
    setFilterType(type);
    if (type === "All") setFiltered(inquiries);
    else setFiltered(inquiries.filter((item) => item.courseType === type));
  };

  // ✅ Search
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filteredList = inquiries.filter((inq) => {
      const matchesType = filterType === "All" || inq.courseType === filterType;
      const matchesSearch =
        inq.fullName.toLowerCase().includes(value) ||
        inq.email.toLowerCase().includes(value) ||
        inq.contact.toLowerCase().includes(value);
      return matchesType && matchesSearch;
    });

    setFiltered(filteredList);
  };

  // ✅ Export Excel
  const exportToExcel = () => {
    if (!filtered.length) return alert("No data to export!");

    const worksheet = XLSX.utils.json_to_sheet(
      filtered.map((inq) => ({
        Name: inq.fullName,
        Email: inq.email,
        Contact: inq.contact,
        Gender: inq.gender,
        "Course Type": inq.courseType,
        Program: inq.course,
        Date: new Date(inq.createdAt).toLocaleDateString("en-GB"),
      }))
    );

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Inquiries");
    XLSX.writeFile(workbook, "Admission_Inquiries.xlsx");
  };

  return (
  <div className="dashboard-container" style={{ width: "100%", maxWidth: "100%", padding: "20px" }}>
    <div className="dashboard-header">
      <h1 className="dashboard-title">Admission Inquiries</h1>
    </div>

    <div className="top-controls glass-card" style={{ width: "100%" }}>
      <div className="filter-buttons">
        {["All", "SSC", "Intermediate", "Cambridge", "Short Course"].map(
          (type) => (
            <button
              key={type}
              className={`filter-btn ${filterType === type ? "active" : ""}`}
              onClick={() => handleFilter(type)}
            >
              {type}
            </button>
          )
        )}
      </div>

      <div className="search-export">
        <input
          type="text"
          placeholder="Search by name, email, or contact..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
        <div className="button-group">
          <button className="export-btn" onClick={exportToExcel}>
            Export to Excel
          </button>
          <button
            className="logout-btn"
            onClick={() => {
              localStorage.removeItem("adminToken");
              navigate("/admin-login");
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>

    <div className="table-container glass-card" style={{ width: "100%" }}>
      {loading ? (
        <p className="loading-text">Loading inquiries...</p>
      ) : filtered.length > 0 ? (
        <table className="inquiry-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Gender</th>
              <th>Course Type</th>
              <th>Program</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((inq, index) => (
              <tr key={inq._id || index}>
                {editingId === inq._id ? (
                  <>
                    <td>
                      <input
                        value={editForm.fullName || ""}
                        onChange={(e) =>
                          setEditForm({ ...editForm, fullName: e.target.value })
                        }
                        className="edit-input"
                      />
                    </td>
                    <td>
                      <input
                        value={editForm.email || ""}
                        onChange={(e) =>
                          setEditForm({ ...editForm, email: e.target.value })
                        }
                        className="edit-input"
                      />
                    </td>
                    <td>
                      <input
                        value={editForm.contact || ""}
                        onChange={(e) =>
                          setEditForm({ ...editForm, contact: e.target.value })
                        }
                        className="edit-input"
                      />
                    </td>
                    <td>{inq.gender}</td>

                    <td>
                      <select
                        value={editForm.courseType || ""}
                        onChange={(e) => {
                          const newCourseType = e.target.value;
                          setEditForm({
                            ...editForm,
                            courseType: newCourseType,
                            course:
                              PROGRAM_OPTIONS[newCourseType]?.[0] || "",
                          });
                        }}
                        className="edit-select"
                      >
                        <option value="">-- Select --</option>
                        <option value="SSC">SSC</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Cambridge">Cambridge</option>
                        <option value="Short Course">Short Course</option>
                      </select>
                    </td>

                    <td>
                      <select
                        value={editForm.course || ""}
                        onChange={(e) =>
                          setEditForm({
                            ...editForm,
                            course: e.target.value,
                          })
                        }
                        className="edit-select"
                        disabled={!editForm.courseType}
                      >
                        <option value="">-- Select Program --</option>
                        {(PROGRAM_OPTIONS[editForm.courseType] || []).map(
                          (prog) => (
                            <option key={prog} value={prog}>
                              {prog}
                            </option>
                          )
                        )}
                      </select>
                    </td>

                    <td>
                      {new Date(inq.createdAt).toLocaleDateString("en-GB")}
                    </td>

                    <td>
                      <div className="actions-container">
                        <button className="save-btn" onClick={saveEdit}>
                          Save
                        </button>
                        <button
                          className="cancel-btn"
                          onClick={() => setEditingId(null)}
                        >
                          Cancel
                        </button>
                      </div>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{inq.fullName}</td>
                    <td>{inq.email}</td>
                    <td>{inq.contact}</td>
                    <td>{inq.gender}</td>
                    <td>{inq.courseType}</td>
                    <td>{inq.course}</td>
                    <td>
                      {new Date(inq.createdAt).toLocaleDateString("en-GB")}
                    </td>

                    <td>
                      <div className="actions-container">
                        <button className="edit-btn" onClick={() => startEditing(inq)}>
                          Edit
                        </button>
                        <button
                          className="delete-btn"
                          onClick={() => handleDelete(inq._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="no-data">No inquiries found</p>
      )}
    </div>
  </div>
);

};

export default AdminDashboard;