"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import {
  Save,
  ArrowLeft,
  Plus,
  Trash2,
  Loader2,
  CheckCircle,
  Info,
} from "lucide-react";
import Link from "next/link";

export default function CaseStudyForm() {
  const router = useRouter();
  const { id } = useParams();
  const isEdit = !!id;

  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(isEdit);
  const [formData, setFormData] = useState({
    title: "",
    industryCategory: "",
    challenge: { title: "Business Challenge (Before)", points: [""] },
    strategy: { title: "Strategy Implemented", points: [""] },
    after: { title: "After (Measurable Outcomes)", metrics: [""] },
    image: "",
    isPublished: true,
  });

  useEffect(() => {
    if (isEdit) {
      fetch(`/api/admin/case-studies/${id}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.success) setFormData(data.data);
          setFetching(false);
        });
    }
  }, [id, isEdit]);

  const handleAddPoint = (
    section: "challenge" | "strategy" | "after",
    field: "points" | "metrics",
  ) => {
    const newData = { ...formData };
    if (section === "after" && field === "metrics") {
      newData.after.metrics.push("");
    } else if (section !== "after" && field === "points") {
      newData[section].points.push("");
    }
    setFormData(newData);
  };

  const handleRemovePoint = (
    section: "challenge" | "strategy" | "after",
    field: "points" | "metrics",
    index: number,
  ) => {
    const newData = { ...formData };
    if (section === "after" && field === "metrics") {
      newData.after.metrics.splice(index, 1);
    } else if (section !== "after" && field === "points") {
      newData[section].points.splice(index, 1);
    }
    setFormData(newData);
  };

  const handlePointChange = (
    section: "challenge" | "strategy" | "after",
    field: "points" | "metrics",
    index: number,
    value: string,
  ) => {
    const newData = { ...formData };
    if (section === "after" && field === "metrics") {
      newData.after.metrics[index] = value;
    } else if (section !== "after" && field === "points") {
      newData[section].points[index] = value;
    }
    setFormData(newData);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const url = isEdit
        ? `/api/admin/case-studies/${id}`
        : "/api/admin/case-studies";
      const res = await fetch(url, {
        method: isEdit ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push("/admin/case-studies");
        router.refresh();
      }
    } catch (err) {
      console.error("Save failed", err);
    } finally {
      setLoading(false);
    }
  };

  if (fetching)
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="animate-spin w-10 h-10 text-brand-primary" />
      </div>
    );

  return (
    <form onSubmit={handleSubmit} className="space-y-10 pb-20">
      {/* Header */}
      <div className="flex justify-between items-center">
        <Link
          href="/admin/case-studies"
          className="flex items-center space-x-2 text-slate-400 hover:text-brand-primary transition-colors text-sm font-bold uppercase tracking-widest"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to List</span>
        </Link>
        <button
          type="submit"
          disabled={loading}
          className="bg-brand-primary hover:bg-brand-dark text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs flex items-center space-x-3 shadow-lg shadow-brand-primary/20 disabled:opacity-70 transition-all"
        >
          {loading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Save className="w-4 h-4" />
          )}
          <span>{isEdit ? "Update Changes" : "Create Case Study"}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Column - Main Info */}
        <div className="lg:col-span-2 space-y-10">
          <section className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm space-y-8">
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-800 flex items-center">
              <Info className="w-4 h-4 mr-3 text-brand-primary" />
              General Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.1em] text-slate-500 ml-1">
                  Study Title
                </label>
                <input
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 focus:ring-2 focus:ring-brand-primary/10 focus:border-brand-primary transition-all font-semibold"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  placeholder="e.g. Scaling Healthcare Enrollment"
                  required
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.1em] text-slate-500 ml-1">
                  Industry Category
                </label>
                <input
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 focus:ring-2 focus:ring-brand-primary/10 focus:border-brand-primary transition-all font-semibold"
                  value={formData.industryCategory}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      industryCategory: e.target.value,
                    })
                  }
                  placeholder="e.g. Fintech / Real Estate"
                  required
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-[0.1em] text-slate-500 ml-1">
                Case Image URL
              </label>
              <input
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 focus:ring-2 focus:ring-brand-primary/10 focus:border-brand-primary transition-all font-semibold"
                value={formData.image}
                onChange={(e) =>
                  setFormData({ ...formData, image: e.target.value })
                }
                placeholder="https://unsplash.com/..."
              />
            </div>
          </section>

          {/* Challenge Section */}
          <section className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm space-y-8">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-black uppercase tracking-[0.2em] text-red-600 flex items-center">
                <div className="w-2 h-2 bg-red-600 rounded-full mr-3" />
                Business Challenges
              </h3>
              <button
                type="button"
                onClick={() => handleAddPoint("challenge", "points")}
                className="text-[10px] font-black text-brand-primary uppercase tracking-widest flex items-center"
                title="Add Challenge Point"
                aria-label="Add Challenge Point"
              >
                <Plus className="w-3 h-3 mr-1" /> Add Point
              </button>
            </div>
            <div className="space-y-4">
              {formData.challenge.points.map((point, i) => (
                <div key={i} className="flex gap-4">
                  <input
                    className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 text-sm font-medium"
                    value={point}
                    onChange={(e) =>
                      handlePointChange(
                        "challenge",
                        "points",
                        i,
                        e.target.value,
                      )
                    }
                    placeholder="Describe the challenge..."
                  />
                  <button
                    type="button"
                    onClick={() => handleRemovePoint("challenge", "points", i)}
                    className="text-slate-300 hover:text-red-500"
                    title="Remove Challenge Point"
                    aria-label="Remove Challenge Point"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Strategy Section */}
          <section className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm space-y-8">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-black uppercase tracking-[0.2em] text-brand-primary flex items-center">
                <div className="w-2 h-2 bg-brand-primary rounded-full mr-3" />
                Strategy Implemented
              </h3>
              <button
                type="button"
                onClick={() => handleAddPoint("strategy", "points")}
                className="text-[10px] font-black text-brand-primary uppercase tracking-widest flex items-center"
                title="Add Strategy Point"
                aria-label="Add Strategy Point"
              >
                <Plus className="w-3 h-3 mr-1" /> Add Point
              </button>
            </div>
            <div className="space-y-4">
              {formData.strategy.points.map((point, i) => (
                <div key={i} className="flex gap-4">
                  <input
                    className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 text-sm font-medium"
                    value={point}
                    onChange={(e) =>
                      handlePointChange("strategy", "points", i, e.target.value)
                    }
                    placeholder="Describe the action taken..."
                  />
                  <button
                    type="button"
                    onClick={() => handleRemovePoint("strategy", "points", i)}
                    className="text-slate-300 hover:text-red-500"
                    title="Remove Strategy Point"
                    aria-label="Remove Strategy Point"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column - Results & Publish */}
        <div className="space-y-10">
          <section className="bg-brand-dark p-10 rounded-3xl border border-white/5 shadow-2xl space-y-8">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-black uppercase tracking-[0.2em] text-brand-accent flex items-center">
                <CheckCircle className="w-4 h-4 mr-3" />
                Key Metrics
              </h3>
              <button
                type="button"
                onClick={() => handleAddPoint("after", "metrics")}
                className="text-[10px] font-black text-brand-accent uppercase tracking-widest flex items-center"
                title="Add Key Metric"
                aria-label="Add Key Metric"
              >
                <Plus className="w-3 h-3 mr-1" /> Add Result
              </button>
            </div>
            <div className="space-y-4">
              {formData.after.metrics.map((metric, i) => (
                <div key={i} className="flex gap-4">
                  <input
                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-sm font-medium text-white focus:border-brand-accent focus:ring-0"
                    value={metric}
                    onChange={(e) =>
                      handlePointChange("after", "metrics", i, e.target.value)
                    }
                    placeholder="e.g. +300% Growth"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemovePoint("after", "metrics", i)}
                    className="text-white/20 hover:text-red-400"
                    title="Remove Key Metric"
                    aria-label="Remove Key Metric"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-slate-800 uppercase tracking-widest">
                  Visibility
                </h4>
                <p className="text-xs text-slate-400 font-medium tracking-wide">
                  Publish entry immediately
                </p>
              </div>
              <button
                type="button"
                onClick={() =>
                  setFormData({
                    ...formData,
                    isPublished: !formData.isPublished,
                  })
                }
                className={`w-14 h-8 rounded-full transition-all flex items-center px-1 ${formData.isPublished ? "bg-brand-primary" : "bg-slate-200"}`}
                title={formData.isPublished ? "Hide case study" : "Publish case study"}
                aria-label={formData.isPublished ? "Hide case study" : "Publish case study"}
              >
                <div
                  className={`w-6 h-6 bg-white rounded-full shadow-sm transform transition-transform ${formData.isPublished ? "translate-x-6" : "translate-x-0"}`}
                />
              </button>
            </div>
          </section>

          {formData.image && (
            <div className="rounded-3xl overflow-hidden aspect-[4/3] border border-slate-200 shadow-sm group relative">
              <Image
                src={formData.image}
                className="w-full h-full object-cover"
                alt="Preview"
                fill
              />
              <div className="absolute inset-0 bg-brand-dark/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">
                  Live Preview
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </form>
  );
}
