"use client";
import React, { useState, useEffect } from "react";
import {
  Plus,
  Edit2,
  Trash2,
  Eye,
  EyeOff,
  Search,
  Loader2,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import Link from "next/link";

interface CaseStudy {
  _id: string;
  title: string;
  industryCategory: string;
  isPublished: boolean;
  createdAt: string;
}

export default function CaseStudiesManager() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchCaseStudies = async () => {
    try {
      const res = await fetch("/api/admin/case-studies");
      const data = await res.json();
      if (data.success) {
        setCaseStudies(data.data);
      }
    } catch (err) {
      console.error("Fetch failed", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCaseStudies();
  }, []);

  const togglePublish = async (id: string, currentStatus: boolean) => {
    try {
      const res = await fetch(`/api/admin/case-studies/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isPublished: !currentStatus }),
      });
      if (res.ok) fetchCaseStudies();
    } catch (err) {
      console.error("Toggle publish failed", err);
    }
  };

  const deleteCaseStudy = async (id: string) => {
    if (!confirm("Are you sure you want to delete this case study?")) return;
    try {
      const res = await fetch(`/api/admin/case-studies/${id}`, {
        method: "DELETE",
      });
      if (res.ok) fetchCaseStudies();
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  const filtered = caseStudies.filter(
    (cs) =>
      cs.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cs.industryCategory.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by title or industry..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white border border-slate-200 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all text-sm"
          />
        </div>

        <Link
          href="/admin/case-studies/new"
          className="bg-brand-primary hover:bg-brand-dark text-white px-6 py-3 rounded-xl font-bold uppercase tracking-widest text-xs flex items-center space-x-2 transition-all shadow-lg shadow-brand-primary/20 whitespace-nowrap"
        >
          <Plus className="w-4 h-4" />
          <span>Create New Entry</span>
        </Link>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 overflow-x-auto shadow-sm">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                Case Study Title
              </th>
              <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                Industry
              </th>
              <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                Status
              </th>
              <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                Created
              </th>
              <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {loading ? (
              <tr>
                <td colSpan={5} className="px-8 py-12 text-center">
                  <Loader2 className="w-8 h-8 animate-spin text-brand-primary mx-auto mb-2" />
                  <span className="text-sm font-medium text-slate-400 uppercase tracking-widest">
                    Synchronizing Data...
                  </span>
                </td>
              </tr>
            ) : filtered.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-8 py-12 text-center">
                  <p className="text-slate-400 font-medium">
                    No results found matching your search.
                  </p>
                </td>
              </tr>
            ) : (
              filtered.map((cs) => (
                <tr
                  key={cs._id}
                  className="hover:bg-slate-50 transition-colors group"
                >
                  <td className="px-8 py-6">
                    <span className="text-sm font-bold text-slate-800">
                      {cs.title}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <span className="text-xs font-semibold text-brand-primary bg-brand-primary/5 px-3 py-1 rounded-full uppercase tracking-wider">
                      {cs.industryCategory}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    {cs.isPublished ? (
                      <div className="flex items-center text-green-600 space-x-2">
                        <CheckCircle2 className="w-4 h-4" />
                        <span className="text-[10px] font-black uppercase tracking-widest">
                          Published
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-center text-slate-400 space-x-2">
                        <XCircle className="w-4 h-4" />
                        <span className="text-[10px] font-black uppercase tracking-widest">
                          Draft
                        </span>
                      </div>
                    )}
                  </td>
                  <td className="px-8 py-6">
                    <span className="text-xs font-medium text-slate-500">
                      {new Date(cs.createdAt).toLocaleDateString()}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <div className="flex justify-end items-center space-x-2">
                      <button
                        onClick={() => togglePublish(cs._id, cs.isPublished)}
                        className="p-2 text-slate-400 hover:text-brand-primary transition-colors"
                        title={cs.isPublished ? "Unpublish" : "Publish"}
                      >
                        {cs.isPublished ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </button>
                      <Link
                        href={`/admin/case-studies/edit/${cs._id}`}
                        className="p-2 text-slate-400 hover:text-brand-primary transition-colors"
                        title="Edit"
                      >
                        <Edit2 className="w-4 h-4" />
                      </Link>
                      <button
                        onClick={() => deleteCaseStudy(cs._id)}
                        className="p-2 text-slate-400 hover:text-red-500 transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
