import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);
  const [isNavHovered, setIsNavHovered] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigationRef = useRef(null);

  // Reset navigation state on page load/route change
  useEffect(() => {
    setIsNavHovered(false);
    setIsMobileMenuOpen(false);
    setActiveMobileSubmenu(null);
    
    // Add a class to prevent hover effects temporarily on route change
    const navElement = navigationRef.current;
    if (navElement) {
      navElement.classList.add('nav-no-hover');
      const timer = setTimeout(() => {
        navElement.classList.remove('nav-no-hover');
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  // Determine which logo to show
  // Use colored logo on template pages or when nav is hovered/mobile menu is open
  const isTemplatePage = document.body.classList.contains('expertise-page') || 
                         document.body.classList.contains('product-page') ||
                         document.body.classList.contains('about-page') ||
                         document.body.classList.contains('contact-page') ||
                         document.body.classList.contains('media-centre-page') ||
                         document.body.classList.contains('design-house-page');
  const shouldShowColoredLogo = isTemplatePage || isNavHovered || isMobileMenuOpen || location.pathname !== '/';
  const logoSource = shouldShowColoredLogo ? "/images/radcon-logo.png" : "/images/radcon-logo-transparent.png";

  const navItems = [
    { 
      name: "About Us", 
      href: "/about-us"
    },
    { 
      name: "Expertise", 
      href: "/expertise",
      hasDropdown: true,
      isMegaMenu: true,
      megaMenuData: {
        columns: [
          {
            title: "Software",
            solutions: [
              "Web & Application",
              "Mobile App Development", 
              "Database Design And Development"
            ]
          },
          {
            title: "Hardware",
            solutions: [
              "Power Solutions",
              "RF/Microwave Solutions",
              "Printed Circuit Board (PCB)",
              "Embedded Systems",
              "Diagnostic Services",
              "Electro Mechanical Solutions"
            ]
          },
          {
            title: "Lifecycle Support Services",
            solutions: [
              "Customer Relationship Management (CRM)",
              "Hardware Lifecycle Support"
            ]
          },
          {
            title: "HR & Engineering Services",
            solutions: [
              "HR Services",
              "Engineering Services"
            ]
          }
        ]
      }
    },
    { 
      name: "Products", 
      hasDropdown: true,
      isMegaMenu: true,
      disabled: true,
      megaMenuData: {
        columns: [
          {
            title: "Life-Saving Equipment",
            solutions: [
              "RCIED Counter Jammers for Convoy Protection",
              "VHF/UHF and HF Bands",
              "VHF/UHF ISM and GSM 3G/4G/LTE",
              "GPS Jammers",
              "Customized Jammers"
            ]
          },
          {
            title: "RF and Microwave",
            solutions: [
              "RF Amplifiers",
              "Phase Shifters",
              "Antennas",
              "RF Cable Assemblies"
            ]
          },
          {
            title: "Power Systems",
            solutions: [
              "Design of Power Supplies (Customized Requirements)",
              "High Voltage Rectification (30 kV)"
            ]
          },
          {
            title: "Embedded Systems",
            solutions: [
              "Microcontroller Solutions",
              "IoT Development Boards", 
              "Real-time Systems",
              "Custom Embedded Hardware"
            ]
          },
          {
            title: "Communication Equipment",
            solutions: ["VHF/UHF Walkie Talkie Sets"]
          },
          {
            title: "Optronics",
            solutions: [
              "Laser Systems",
              "Optical Sensors",
              "Imaging Systems", 
              "Fiber Optic Solutions"
            ]
          },
          {
            title: "Navigation",
            solutions: [
              "GPS Systems",
              "Inertial Navigation",
              "Marine Navigation",
              "Aviation Navigation"
            ]
          },
          {
            title: "Aviation Industry",
            solutions: [
              "Multi-Function Displays (MFD) for Helicopters",
              "Radar Altimeters"
            ]
          },
          {
            title: "Indigenous Development Of Radar Parts",
            solutions: [
              "Camera Modules for Optical Tracking",
              "TFT Displays",
              "Memory Units",
              "Video Amplifier Cards",
              "Control Cards"
            ]
          }
        ]
      }
    },
    { 
      name: "Design House", 
      href: "/design-house"
    },
    { 
      name: "Media Centre", 
      href: "/media-centre"
    },
    { name: "Contact", href: "/contact" }
  ];

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navigationRef.current && !navigationRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
        setActiveMobileSubmenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.style.overflow = '';
      document.body.classList.remove('mobile-menu-open');
    }

    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('mobile-menu-open');
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
        setActiveMobileSubmenu(null);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle scroll for hide/show navigation
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Don't hide navigation if mobile menu is open
      if (isMobileMenuOpen) return;
      
      // Show navigation at top of page
      if (currentScrollY < 10) {
        setIsNavVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past threshold - hide nav
        setIsNavVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show nav
        setIsNavVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setActiveMobileSubmenu(null);
    }
  };

  const toggleMobileSubmenu = (itemName) => {
    setActiveMobileSubmenu(activeMobileSubmenu === itemName ? null : itemName);
  };

  const renderMegaMenu = (megaMenuData, menuName) => {
    // Map submenu labels to dynamic expertise routes where available
    const expertiseRouteMap = {
      'Web & Application': { category: 'software', slug: 'web-application' },
      'Mobile App Development': { category: 'software', slug: 'mobile-app-development' },
      'Database Design And Development': { category: 'software', slug: 'database-design' },
      'Power Solutions': { category: 'electronics', slug: 'power-systems' },
      'RF/Microwave Solutions': { category: 'electronics', slug: 'rf-and-microwave' },
      'Printed Circuit Board (PCB)': { category: 'electronics', slug: 'printed-circuit-board' },
      'Embedded Systems': { category: 'hardware', slug: 'embedded-systems' },
      'Diagnostic Services': { category: 'hardware', slug: 'diagnostic-services' },
      'Electro Mechanical Solutions': { category: 'hardware', slug: 'electro-mechanical-solutions' },
      'Customer Relationship Management (CRM)': { category: 'lifecycle-support', slug: 'customer-relationship-management' },
      'Hardware Lifecycle Support': { category: 'lifecycle-support', slug: 'hardware-lifecycle-support' },
      'HR Services': { category: 'hr', slug: 'hr-services' },
      'Engineering Services': { category: 'hr', slug: 'engineering-services' },
    };

    // Map product labels to product page routes
    const productRouteMap = {
      'Life-Saving Equipment': '/products/product-jammers',
      'RF and Microwave': '/products/product-rf-amplifiers',
      'Power Systems': '/products/product-power-supplies',
      'Embedded Systems': '/products/product-embedded-boards',
      'Communication Equipment': '/products/product-communication',
      'Optronics': '/products/product-optronics',
      'Navigation': '/products/product-navigation',
      'Aviation Industry': '/products/product-aviation',
      'Indigenous Development Of Radar Parts': '/products/product-radar-parts',
    };

    const getSubmenuHref = (label, columnTitle) => {
      if (menuName === 'Products') {
        // For products, check if this is a main category (column title)
        if (productRouteMap[columnTitle]) {
          return productRouteMap[columnTitle];
        }
        // For individual product items, still link to main category for now
        return productRouteMap[columnTitle] || '#!';
      } else {
        // For expertise menu
        const entry = expertiseRouteMap[label];
        return entry ? `/expertise/${entry.category}/${entry.slug}` : '#!';
      }
    };

    return (
      <div className="nav-mega-menu-container" id="megaMenuContainer">
        <div className="nav-mega-menu-content" id="megaMenuContent">
          {megaMenuData.columns.map((column, index) => (
            <div key={index} className="nav-mega-menu-column" id={`megaMenuColumn${index}`}>
              <h3 className="nav-mega-menu-title" id={`megaMenuTitle${index}`}>
                {column.title}
              </h3>
              <ul className="nav-mega-menu-list" id={`megaMenuList${index}`}>
                {column.solutions.map((solution, solutionIndex) => (
                  <li key={solutionIndex} className="nav-mega-menu-item" id={`megaMenuItem${index}${solutionIndex}`}>
                    <a href={getSubmenuHref(solution, column.title)} className="nav-mega-menu-link" id={`megaMenuLink${index}${solutionIndex}`}>
                      {solution}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderDropdown = (dropdownItems) => {
    return (
      <div className="nav-dropdown-container" id="dropdownContainer">
        <ul className="nav-dropdown-list" id="dropdownList">
          {dropdownItems.map((item, index) => (
            <li key={index} className="nav-dropdown-item" id={`dropdownItem${index}`}>
              <a href={item.href} className="nav-dropdown-link" id={`dropdownLink${index}`}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const renderMobileSubmenu = (item) => {
    if (!item.hasDropdown) return null;

    const expertiseRouteMap = {
      'Web & Application': { category: 'software', slug: 'web-application' },
      'Mobile App Development': { category: 'software', slug: 'mobile-app-development' },
      'Database Design And Development': { category: 'software', slug: 'database-design' },
      'Power Solutions': { category: 'electronics', slug: 'power-systems' },
      'RF/Microwave Solutions': { category: 'electronics', slug: 'rf-and-microwave' },
      'Printed Circuit Board (PCB)': { category: 'electronics', slug: 'printed-circuit-board' },
      'Embedded Systems': { category: 'hardware', slug: 'embedded-systems' },
      'Diagnostic Services': { category: 'hardware', slug: 'diagnostic-services' },
      'Electro Mechanical Solutions': { category: 'hardware', slug: 'electro-mechanical-solutions' },
      'Customer Relationship Management (CRM)': { category: 'lifecycle-support', slug: 'customer-relationship-management' },
      'Hardware Lifecycle Support': { category: 'lifecycle-support', slug: 'hardware-lifecycle-support' },
      'HR Services': { category: 'hr', slug: 'hr-services' },
      'Engineering Services': { category: 'hr', slug: 'engineering-services' },
    };

    // Map product labels to product page routes
    const productRouteMap = {
      'Life-Saving Equipment': '/products/product-jammers',
      'RF and Microwave': '/products/product-rf-amplifiers',
      'Power Systems': '/products/product-power-supplies',
      'Embedded Systems': '/products/product-embedded-boards',
      'Communication Equipment': '/products/product-communication',
      'Optronics': '/products/product-optronics',
      'Navigation': '/products/product-navigation',
      'Aviation Industry': '/products/product-aviation',
      'Indigenous Development Of Radar Parts': '/products/product-radar-parts',
    };

    const getSubmenuHref = (label, columnTitle) => {
      if (item.name === 'Products') {
        // For products, check if this is a main category (column title)
        if (productRouteMap[columnTitle]) {
          return productRouteMap[columnTitle];
        }
        // For individual product items, still link to main category for now
        return productRouteMap[columnTitle] || '#!';
      } else {
        // For expertise menu
        const entry = expertiseRouteMap[label];
        return entry ? `/expertise/${entry.category}/${entry.slug}` : '#!';
      }
    };

    return (
      <div className="nav-mobile-submenu" id={`navMobileSubmenu${item.name}`}>
        {item.isMegaMenu ? (
          item.megaMenuData.columns.map((column, columnIndex) => (
            <div key={columnIndex} className="nav-mobile-submenu-section" id={`navMobileSubmenuSection${item.name}${columnIndex}`}>
              <h4 className="nav-mobile-submenu-title" id={`navMobileSubmenuTitle${item.name}${columnIndex}`}>
                {column.title}
              </h4>
              <ul className="nav-mobile-submenu-list" id={`navMobileSubmenuList${item.name}${columnIndex}`}>
                {column.solutions.map((solution, solutionIndex) => (
                  <li key={solutionIndex} className="nav-mobile-submenu-item" id={`navMobileSubmenuItem${item.name}${columnIndex}${solutionIndex}`}>
                    <a href={getSubmenuHref(solution, column.title)} className="nav-mobile-submenu-link" id={`navMobileSubmenuLink${item.name}${columnIndex}${solutionIndex}`}>
                      {solution}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <ul className="nav-mobile-submenu-list" id={`navMobileSubmenuListSimple${item.name}`}>
            {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
              <li key={dropdownIndex} className="nav-mobile-submenu-item" id={`navMobileSubmenuItemSimple${item.name}${dropdownIndex}`}>
                <a href={dropdownItem.href} className="nav-mobile-submenu-link" id={`navMobileSubmenuLinkSimple${item.name}${dropdownIndex}`}>
                  {dropdownItem.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  return (
    <nav 
      className={`nav-main-container ${isNavVisible ? 'nav-visible' : 'nav-hidden'}`}
      id="navMainContainer" 
      ref={navigationRef}
      onMouseEnter={() => setIsNavHovered(true)}
      onMouseLeave={() => setIsNavHovered(false)}
    >
      <div className="nav-wrapper" id="navWrapper">
        {/* Logo */}
        <div className="nav-logo-container" id="navLogoContainer">
          <a href="/" className="nav-logo-link" id="navLogoLink">
            <img src={logoSource} alt="RADCON" className="nav-logo-image" id="navLogoImage" />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-desktop-menu" id="navDesktopMenu">
          <ul className="nav-items-list" id="navItemsList">
            {navItems.map((item, index) => (
              <li 
                key={index} 
                className="nav-item" 
                id={`navItem${index}`}
              >
                <a 
                  href={item.disabled ? "#" : (item.href || "#")} 
                  className={`nav-item-link ${item.disabled ? 'nav-item-link--disabled' : ''}`}
                  id={`navItemLink${index}`}
                  onClick={item.disabled ? (e) => e.preventDefault() : undefined}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <span className="nav-dropdown-arrow" id={`navDropdownArrow${index}`}>▼</span>
                  )}
                </a>

                {/* Mega Menu */}
                {item.isMegaMenu && item.hasDropdown && (
                  <div 
                    className="nav-mega-menu-wrapper" 
                    id={`navMegaMenuWrapper${index}`}
                  >
                    {renderMegaMenu(item.megaMenuData, item.name)}
                  </div>
                )}

                {/* Regular Dropdown */}
                {!item.isMegaMenu && item.hasDropdown && (
                  <div 
                    className="nav-dropdown-wrapper" 
                    id={`navDropdownWrapper${index}`}
                  >
                    {renderDropdown(item.dropdownItems)}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`nav-mobile-toggle ${isMobileMenuOpen ? 'nav-mobile-menu-open' : ''}`}
          id="navMobileToggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="nav-hamburger-line" id="navHamburgerLine1"></span>
          <span className="nav-hamburger-line" id="navHamburgerLine2"></span>
          <span className="nav-hamburger-line" id="navHamburgerLine3"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`nav-mobile-menu ${isMobileMenuOpen ? 'nav-mobile-menu-open' : ''}`} 
        id="navMobileMenu"
      >
        <ul className="nav-mobile-items-list" id="navMobileItemsList">
          {navItems.map((item, index) => (
            <li key={index} className="nav-mobile-item" id={`navMobileItem${index}`}>
              <div className="nav-mobile-item-header">
                <a 
                  href={item.disabled ? "#" : (item.href || "#")} 
                  className={`nav-mobile-item-link ${item.disabled ? 'nav-mobile-item-link--disabled' : ''}`}
                  id={`navMobileItemLink${index}`}
                  onClick={item.disabled ? (e) => e.preventDefault() : undefined}
                >
                  {item.name}
                </a>
                {item.hasDropdown ? (
                  <button 
                    className="nav-mobile-submenu-toggle"
                    onClick={() => toggleMobileSubmenu(item.name)}
                    aria-label={`Toggle ${item.name} submenu`}
                  >
                    {activeMobileSubmenu === item.name ? '−' : '+'}
                  </button>
                ) : (
                  <div className="nav-mobile-item-spacer"></div>
                )}
              </div>
              
              {/* Mobile Submenus */}
              {item.hasDropdown && activeMobileSubmenu === item.name && (
                renderMobileSubmenu(item)
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;