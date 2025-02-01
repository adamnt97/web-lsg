import { FooterDemo } from "@/components/ui/footer-section"

interface FooterProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

const Footer = ({ isDarkMode, setIsDarkMode }: FooterProps) => {
  return <FooterDemo isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
}

export default Footer