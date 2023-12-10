import engineering_faculty from "@assets/Images/faculty-engineering.png";
import business_faculty from "@assets/Images/faculty-business.png";
import health_faculty from "@assets/Images/faculty-health.png";
import faculty_information from "@assets/Images/faculty-information.png";
import faculty_art from "@assets/Images/faculty-art.png";
import faculty_law from "@assets/Images/faculty-law.png";
import faculty_international from "@assets/Images/faculty-law.png";
import faculty_management from "@assets/Images/faculty-management.png";

export const data = {
  faculties: [
    {
      image: engineering_faculty,
      heading: "Faculty of Engineering",
      features: ["All walks of Engineering", "Industrial Studies"],
    },
    {
      image: business_faculty,
      heading: "Faculty of Business",
      features: ["All walks of Business", "Economic Data Analysis"],
    },
    {
      image: health_faculty,
      heading: "Faculty of Health Science",
      features: ["Medicine", "Pharmacy"],
    },

    {
      image: faculty_information,
      heading: "Faculty of Information and Statistics",
      features: ["Systems Management", "Economic Data Analysis"],
    },
    {
      image: faculty_art,
      heading: "Faculty of Art and Humanities",
      features: ["Art Education", "Creative Writing"],
    },
    {
      image: faculty_law,
      heading: "Faculty of Law and Legal Studies",
      features: ["Law", "International Law"],
    },
    {
      image: faculty_international,
      heading: "Faculty of International Relations",
      features: ["Diplomatic Studies", "Economic Skills"],
    },
    {
      image: faculty_management,
      heading: "Faculty of Management",
      features: ["Exact Methods", "Social Sciences"],
    },
  ],
};
