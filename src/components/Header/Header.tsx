import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import styles from "./Header.module.css";

export function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);

  // Close menu when clicking a link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  const isFinancialTool = location.pathname === "/projects/financial-tool";
  const is2DGame = location.pathname === "/projects/2d-game";
  const isProjectPage = isFinancialTool || is2DGame;

  return (
    <header>
      <div className={styles.toolbar}>
        <Link to="/" className={styles.logo}>
          MENDOZA.DEV
        </Link>

        <nav className={styles.desktopNav}>
          {!isProjectPage && (
            <a href="/#experience" className={styles.navLink}>
              Experience
            </a>
          )}

          {isProjectPage ? (
            <div className={styles.dropdown}>
              <button
                className={styles.dropdownButton}
                onClick={() => setIsProjectsDropdownOpen(!isProjectsDropdownOpen)}
              >
                Projects
                <ChevronDown size={16} />
              </button>
              {isProjectsDropdownOpen && (
                <div className={styles.dropdownMenu}>
                  {isFinancialTool && (
                    <Link
                      to="/projects/2d-game"
                      className={styles.dropdownItem}
                      onClick={() => setIsProjectsDropdownOpen(false)}
                    >
                      2D Action RPG
                    </Link>
                  )}
                  {is2DGame && (
                    <Link
                      to="/projects/financial-tool"
                      className={styles.dropdownItem}
                      onClick={() => setIsProjectsDropdownOpen(false)}
                    >
                      Financial Tool
                    </Link>
                  )}
                </div>
              )}
            </div>
          ) : (
            <a href="/#projects" className={styles.navLink}>
              Projects
            </a>
          )}

          <a href="#contact" className={styles.navLink}>
            Contact
          </a>
        </nav>

        <button
          className={styles.hamburger}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <nav className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ""}`}>
        {!isProjectPage && (
          <a href="/#experience" className={styles.mobileNavLink} onClick={handleLinkClick}>
            Experience
          </a>
        )}

        {isProjectPage ? (
          <>
            {isFinancialTool && (
              <Link
                to="/projects/2d-game"
                className={styles.mobileNavLink}
                onClick={handleLinkClick}
              >
                2D Action RPG
              </Link>
            )}
            {is2DGame && (
              <Link
                to="/projects/financial-tool"
                className={styles.mobileNavLink}
                onClick={handleLinkClick}
              >
                Financial Tool
              </Link>
            )}
          </>
        ) : (
          <a href="/#projects" className={styles.mobileNavLink} onClick={handleLinkClick}>
            Projects
          </a>
        )}

        <a href="#contact" className={styles.mobileNavLink} onClick={handleLinkClick}>
          Contact
        </a>
      </nav>
    </header>
  );
}
