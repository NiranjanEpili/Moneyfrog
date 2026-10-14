export interface CompanyInfo {
  legalName: string;
  brandName: string;
  tagline: string;
  heroHeadline: string;
  heroSubtitle: string;
  cin: string;
  gstin: string;
  amfiArn: string;
  irdaiLicense: string;
  experienceYears: number;
  managedAssetsText: string;
  ratingText: string;
  address: {
    line1: string;
    line2: string;
    line3: string;
    city: string;
    state: string;
    pincode: string;
    full: string;
  };
  phones: {
    primary: string;
    secondary: string;
    whatsapp: string;
  };
  email: string;
  website: string;
  socials: {
    linkedin: string;
    instagram: string;
    facebook: string;
    youtube: string;
    x: string;
  };
  appStoreLinks: {
    ios: string;
    android: string;
  };
}

export const COMPANY: CompanyInfo = {
  legalName: "Moneyfrog Financial Services Private Limited",
  brandName: "Moneyfrog",
  tagline: "Your Wealth. Your Goals. One Trusted Partner.",
  heroHeadline: "Your Wealth. Your Goals. One Trusted Partner.",
  heroSubtitle:
    "Discover a more considered approach to wealth management with personalized investment solutions, expert guidance, and portfolio insights tailored to your financial journey.",
  cin: "U66000MH2011PTC216613",
  gstin: "27AAJCA5151G1ZR",
  amfiArn: "ARN-94798",
  irdaiLicense: "CA0450",
  experienceYears: 11,
  managedAssetsText: "₹1,700+ Cr Managed Assets",
  ratingText: "4.3 / 5 Client Trust Rating",
  address: {
    line1: "723 & 724, 7th Floor, Swastik Chambers",
    line2: "SG Barve Marg, Chembur",
    line3: "Opp. Chembur Railway Station",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400071",
    full: "723 & 724, 7th Floor, Swastik Chambers, SG Barve Marg, Chembur, Mumbai, Maharashtra 400071, India",
  },
  phones: {
    primary: "+91 90049 32221",
    secondary: "+91 90046 75553",
    whatsapp: "+91 90049 32221",
  },
  email: "contact@moneyfrog.in",
  website: "https://moneyfrog.in",
  socials: {
    linkedin: "https://www.linkedin.com/company/moneyfrog-in/",
    instagram: "https://www.instagram.com/moneyfrog_financial_services/",
    facebook: "https://www.facebook.com/moneyfrog.in",
    youtube: "https://www.youtube.com/@moneyfrogfinancialservices4924",
    x: "https://x.com/moneyfrog_in",
  },
  appStoreLinks: {
    ios: "https://apps.apple.com/us/app/moneyfrog-in/id1079405996?ls=1",
    android: "https://play.google.com/store/apps/details?id=com.myapp.moneyfrog.moneyfrogapp&hl=en",
  },
};
