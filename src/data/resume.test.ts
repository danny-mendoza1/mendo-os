import { describe, it, expect } from "vitest";
import { personalInfo, experience, projects } from "./resume";

describe("Resume Data", () => {
  describe("personalInfo", () => {
    it("has required fields", () => {
      expect(personalInfo.name).toBeDefined();
      expect(personalInfo.title).toBeDefined();
      expect(personalInfo.email).toBeDefined();
      expect(personalInfo.github).toBeDefined();
      expect(personalInfo.linkedin).toBeDefined();
    });

    it("has valid email format", () => {
      expect(personalInfo.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    });

    it("has valid URLs", () => {
      expect(personalInfo.github).toMatch(/^https?:\/\//);
      expect(personalInfo.linkedin).toMatch(/^https?:\/\//);
    });
  });

  describe("experience", () => {
    it("is an array with entries", () => {
      expect(Array.isArray(experience)).toBe(true);
      expect(experience.length).toBeGreaterThan(0);
    });

    it("has required fields for each entry", () => {
      experience.forEach((job) => {
        expect(job.id).toBeDefined();
        expect(job.company).toBeDefined();
        expect(job.role).toBeDefined();
        expect(job.startDate).toBeDefined();
        expect(job.endDate).toBeDefined();
        expect(Array.isArray(job.highlights)).toBe(true);
        expect(Array.isArray(job.techStack)).toBe(true);
      });
    });
  });

  describe("projects", () => {
    it("is an array with entries", () => {
      expect(Array.isArray(projects)).toBe(true);
      expect(projects.length).toBeGreaterThan(0);
    });

    it("has required fields for each entry", () => {
      projects.forEach((project) => {
        expect(project.id).toBeDefined();
        expect(project.title).toBeDefined();
        expect(project.description).toBeDefined();
        expect(Array.isArray(project.techStack)).toBe(true);
        expect(typeof project.featured).toBe("boolean");
      });
    });

    it("has at least one featured project", () => {
      const featuredProjects = projects.filter((p) => p.featured);
      expect(featuredProjects.length).toBeGreaterThan(0);
    });
  });
});
