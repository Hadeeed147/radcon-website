// Product catalog data for RADCON Technologies
// All slugs are prefixed with 'product-' to avoid conflicts with expertise pages

export const productPages = {
    // 1. LIFE-SAVING EQUIPMENT (JAMMERS)
    'product-jammers': {
      slug: 'product-jammers',
      category: 'Life-Saving Equipment',
      template: 'product',
      meta: {
        title: 'Electronic Countermeasure Systems | RADCON Technologies',
        description: 'Advanced RCIED jammers and electronic countermeasure systems for convoy protection. VHF/UHF, cellular, GPS jamming solutions for critical security applications.'
      },
      hero: {
        title: 'Electronic Countermeasure Systems',
        subtitle: 'Protecting Lives Through Advanced Signal Jamming Technology',
        category: 'Life-Saving Equipment',
        backgroundImage: '/images/products/jammers-hero.jpg', // Military convoy or security vehicle
        breadcrumbs: [
          { label: 'Home', href: '/' },
          { label: 'Products', href: '/products' },
          { label: 'Life-Saving Equipment' }
        ]
      },
      showcase: {
        image: '/images/products/jammer-system.jpg', // Professional jammer system
        title: 'Advanced RCIED Counter Systems',
        highlights: [
          'Multi-band jamming capability',
          'Vehicle-mounted and portable options',
          'Convoy protection certified',
          'Adaptive frequency hopping',
          'Remote control capability'
        ],
        specifications: {
          'Frequency Coverage': '20MHz - 6GHz',
          'Output Power': 'Up to 500W',
          'Protection Radius': '100-500m',
          'Operating Temp': '-20°C to +55°C'
        },
        primaryButton: { text: 'Request Quote', href: '/contact' },
        secondaryButton: { text: 'Download Specifications', href: '/downloads/jammers-spec.pdf' }
      },
      specifications: [
        {
          title: 'Frequency Bands',
          specs: [
            { label: 'VHF Band', value: '20-88 MHz', note: 'Remote control frequencies' },
            { label: 'VHF/UHF Band', value: '130-500 MHz', note: 'Two-way radio' },
            { label: 'GSM 900', value: '925-960 MHz', note: 'Cellular band' },
            { label: 'GSM 1800', value: '1805-1880 MHz', note: 'DCS band' },
            { label: '3G/UMTS', value: '2110-2170 MHz', note: 'WCDMA' },
            { label: '4G/LTE', value: '2300-2700 MHz', note: 'Multiple bands' },
            { label: 'WiFi/Bluetooth', value: '2400-2500 MHz', note: 'ISM band' },
            { label: 'GPS L1', value: '1575.42 MHz', note: 'Navigation' }
          ]
        },
        {
          title: 'Technical Specifications',
          specs: [
            { label: 'Output Power', value: '10W - 500W', note: 'Per band configurable' },
            { label: 'Jamming Method', value: 'Barrage/Sweep', note: 'Adaptive' },
            { label: 'Antenna Type', value: 'Omni/Directional', note: 'Application specific' },
            { label: 'Power Supply', value: '12/24/48 VDC', note: 'Vehicle compatible' },
            { label: 'Cooling System', value: 'Forced Air', note: 'Thermal management' },
            { label: 'MTBF', value: '>10,000 hours', note: 'High reliability' }
          ]
        },
        {
          title: 'Environmental & Compliance',
          specs: [
            { label: 'Operating Temperature', value: '-20°C to +55°C', note: 'MIL-STD' },
            { label: 'Storage Temperature', value: '-40°C to +70°C', note: 'Extended range' },
            { label: 'Humidity', value: '95% RH', note: 'Non-condensing' },
            { label: 'Vibration', value: 'MIL-STD-810G', note: 'Vehicle mounted' },
            { label: 'Protection', value: 'IP65', note: 'Dust/water resistant' },
            { label: 'EMI/EMC', value: 'MIL-STD-461F', note: 'Military standard' }
          ]
        }
      ],
      applications: [
        {
          icon: 'defense',
          title: 'Convoy Protection',
          description: 'Protecting military and VIP convoys from RCIED threats',
          examples: ['Military convoys', 'VIP movements', 'Critical transports']
        },
        {
          icon: 'commercial',
          title: 'Facility Security',
          description: 'Securing critical infrastructure and high-risk facilities',
          examples: ['Government buildings', 'Embassies', 'Power plants']
        },
        {
          icon: 'industry',
          title: 'Event Security',
          description: 'Temporary protection for high-profile events',
          examples: ['State visits', 'Public gatherings', 'Sports events']
        },
        {
          icon: 'aerospace',
          title: 'Border Security',
          description: 'Preventing unauthorized drone and communication activities',
          examples: ['Border checkpoints', 'Sensitive zones', 'Restricted areas']
        }
      ],
      features: [
        {
          icon: '🛡️',
          title: 'Multi-Band Coverage',
          description: 'Simultaneous jamming of multiple frequency bands for comprehensive protection',
          highlights: ['VHF/UHF', 'Cellular', 'WiFi/GPS']
        },
        {
          icon: '⚡',
          title: 'Smart Power Management',
          description: 'Adaptive power control optimizes jamming effectiveness while minimizing interference',
          highlights: ['Auto-adjust', 'Band priority', 'Power saving']
        },
        {
          icon: '🔄',
          title: 'Modular Design',
          description: 'Customizable modules allow configuration for specific threat scenarios',
          highlights: ['Hot-swappable', 'Field upgradable', 'Scalable']
        },
        {
          icon: '📡',
          title: 'Remote Control',
          description: 'Operate and monitor system remotely for enhanced operator safety',
          highlights: ['Wireless control', 'Status monitoring', 'Alert system']
        },
        {
          icon: '🌡️',
          title: 'Thermal Management',
          description: 'Advanced cooling ensures continuous operation in harsh environments',
          highlights: ['Smart cooling', 'Temperature monitoring', 'Auto-shutdown']
        },
        {
          icon: '🔒',
          title: 'Selective Jamming',
          description: 'Allows friendly communications while blocking threats',
          highlights: ['Whitelist capability', 'Frequency windows', 'Smart filtering']
        }
      ],
      advantages: [
        {
          title: 'Proven Field Performance',
          description: 'Battle-tested in real-world scenarios with documented success in threat mitigation'
        },
        {
          title: 'Local Manufacturing',
          description: 'Designed and manufactured in Pakistan ensuring quick support and customization'
        },
        {
          title: 'Military-Grade Reliability',
          description: 'Built to MIL-STD specifications for operation in extreme conditions'
        },
        {
          title: 'Comprehensive Coverage',
          description: 'Protection against all known RCIED activation methods and frequencies'
        }
      ],
      certifications: [
        'MIL-STD-810G Environmental',
        'MIL-STD-461F EMC',
        'IP65 Protection Rating',
        'ISO 9001:2015 Certified',
        'CE Marking Compliant'
      ],
      warranty: {
        years: '2',
        description: 'Comprehensive warranty with on-site support and training included'
      },
      gallery: [
        {
          url: '/images/products/jammer-vehicle-mounted.jpg',
          thumbnail: '/images/products/jammer-vehicle-mounted-thumb.jpg',
          caption: 'Vehicle-mounted convoy protection system'
        },
      ],
      relatedProducts: [
        {
          slug: 'product-rf-amplifiers',
          title: 'RF Power Amplifiers',
          category: 'RF & Microwave',
          description: 'High-power RF amplifiers for jamming applications',
          href: '/products/product-rf-amplifiers'
        },
        {
          slug: 'product-power-supplies',
          title: 'Military Power Supplies',
          category: 'Power Systems',
          description: 'Ruggedized power systems for field deployment',
          href: '/products/product-power-supplies'
        }
      ],
      cta: {
        title: 'Protect Your Assets with Advanced Jamming Technology',
        description: 'Contact our security experts to discuss your electronic countermeasure requirements',
        primaryButton: { text: 'Request Security Assessment', href: '/contact' },
        secondaryButton: { text: 'Download Product Catalog', href: '/downloads/jammers-catalog.pdf' },
        tertiaryButton: { text: 'Schedule Demo', href: '/demo' }
      }
    },
  
    // 2. RF AND MICROWAVE PRODUCTS
    'product-rf-amplifiers': {
      slug: 'product-rf-amplifiers',
      category: 'RF & Microwave',
      template: 'product',
      meta: {
        title: 'RF & Microwave Components | RADCON Technologies',
        description: 'High-performance RF amplifiers, phase shifters, antennas, and cable assemblies. Custom RF solutions from DC to 9GHz for communication and radar systems.'
      },
      hero: {
        title: 'RF & Microwave Components',
        subtitle: 'High-Performance RF Solutions from DC to 9GHz',
        category: 'RF & Microwave Products',
        backgroundImage: '/images/products/rf-components-hero.jpg', // RF lab or components
        breadcrumbs: [
          { label: 'Home', href: '/' },
          { label: 'Products', href: '/products' },
          { label: 'RF & Microwave' }
        ]
      },
      showcase: {
        image: '/images/products/rf-amplifier.jpg', // RF amplifier product
        title: 'Professional RF Solutions',
        highlights: [
          'Power amplifiers up to 2kW',
          'Frequency coverage to 9GHz',
          'Low noise figure <1dB',
          'Custom impedance matching',
          'MIL-SPEC compliance'
        ],
        specifications: {
          'Frequency Range': 'DC - 9GHz',
          'Power Output': 'Up to 2kW',
          'Gain': '20-60dB',
          'Efficiency': '>65%'
        },
        primaryButton: { text: 'Request Quote', href: '/contact' },
        secondaryButton: { text: 'Technical Datasheet', href: '/downloads/rf-products.pdf' }
      },
      specifications: [
        {
          title: 'RF Amplifiers',
          specs: [
            { label: 'Frequency Range', value: '10MHz - 9GHz', note: 'Multiple bands' },
            { label: 'Output Power', value: '1W - 2kW', note: 'Application specific' },
            { label: 'Gain', value: '20-60dB', note: 'Adjustable' },
            { label: 'Noise Figure', value: '<1dB typical', note: 'LNA options' },
            { label: 'P1dB', value: '+30 to +63dBm', note: 'Model dependent' },
            { label: 'Technology', value: 'GaN/LDMOS/GaAs', note: 'Latest devices' }
          ]
        },
        {
          title: 'Phase Shifters',
          specs: [
            { label: 'Type', value: 'Analog/Digital', note: '360° coverage' },
            { label: 'Frequency', value: '0.5-18GHz', note: 'Wideband' },
            { label: 'Phase Range', value: '0-360°', note: 'Continuous' },
            { label: 'Insertion Loss', value: '<3dB', note: 'Low loss' },
            { label: 'Phase Accuracy', value: '±5°', note: 'High precision' },
            { label: 'Switching Speed', value: '<100ns', note: 'Fast response' }
          ]
        },
        {
          title: 'Antennas',
          specs: [
            { label: 'Types', value: 'Omni/Directional/Array', note: 'Custom designs' },
            { label: 'Frequency', value: '100MHz - 6GHz', note: 'Multiple bands' },
            { label: 'Gain', value: '2-30dBi', note: 'High gain options' },
            { label: 'VSWR', value: '<1.5:1', note: 'Good match' },
            { label: 'Polarization', value: 'Linear/Circular', note: 'Selectable' },
            { label: 'Power Handling', value: 'Up to 1kW', note: 'High power' }
          ]
        }
      ],
      applications: [
        {
          icon: 'telecom',
          title: 'Telecommunications',
          description: 'Base station amplifiers and repeater systems',
          examples: ['Cellular towers', 'Satellite uplinks', 'Microwave links']
        },
        {
          icon: 'defense',
          title: 'Radar Systems',
          description: 'Transmitter amplifiers and receiver components',
          examples: ['Air surveillance', 'Weather radar', 'Marine radar']
        },
        {
          icon: 'aerospace',
          title: 'Electronic Warfare',
          description: 'Jamming amplifiers and countermeasure systems',
          examples: ['ECM systems', 'SIGINT', 'EW platforms']
        },
        {
          icon: 'research',
          title: 'Test & Measurement',
          description: 'Laboratory amplifiers and test equipment',
          examples: ['EMC testing', 'Antenna ranges', 'R&D labs']
        }
      ],
      features: [
        {
          icon: '📊',
          title: 'Wide Bandwidth',
          description: 'Multi-octave bandwidth coverage for versatile applications',
          highlights: ['DC-9GHz', 'Low ripple', 'Flat response']
        },
        {
          icon: '⚙️',
          title: 'High Linearity',
          description: 'Excellent linearity for minimal signal distortion',
          highlights: ['High IP3', 'Low IMD', 'ACPR optimized']
        },
        {
          icon: '🌡️',
          title: 'Thermal Stability',
          description: 'Temperature compensated designs for consistent performance',
          highlights: ['Auto-bias', 'Heat sinks', 'Thermal shutdown']
        },
        {
          icon: '🔧',
          title: 'Customizable',
          description: 'Tailored solutions to meet specific requirements',
          highlights: ['Custom frequency', 'Power levels', 'Form factors']
        },
        {
          icon: '📈',
          title: 'High Efficiency',
          description: 'Advanced matching networks for maximum efficiency',
          highlights: ['>65% PAE', 'Low DC power', 'Green design']
        },
        {
          icon: '🛡️',
          title: 'Protection Features',
          description: 'Built-in protection for reliable operation',
          highlights: ['VSWR protection', 'Over-temp', 'Reverse power']
        }
      ],
      advantages: [
        {
          title: 'Local RF Expertise',
          description: 'One of the few companies in Pakistan with advanced RF design capabilities'
        },
        {
          title: 'Custom Solutions',
          description: 'Ability to design and tune RF systems for specific applications'
        },
        {
          title: 'Quick Turnaround',
          description: 'Local manufacturing enables rapid prototyping and delivery'
        },
        {
          title: 'Proven Performance',
          description: 'Field-tested products in communication and radar applications'
        }
      ],
      certifications: [
        'ISO 9001:2015',
        'RoHS Compliant',
        'CE Marked',
        'MIL-STD-883 Tested'
      ],
      warranty: {
        years: '1',
        description: 'Standard warranty with extended options available'
      },
      gallery: [
        {
          url: '/images/products/rf-power-amplifier.jpg',
          caption: 'High-power GaN amplifier module'
        },
      ],
      relatedProducts: [
        {
          slug: 'product-power-supplies',
          title: 'RF Power Supplies',
          category: 'Power Systems',
          description: 'Specialized power supplies for RF amplifiers',
          href: '/products/product-power-supplies'
        },
        {
          slug: 'product-jammers',
          title: 'Jamming Systems',
          category: 'Life-Saving Equipment',
          description: 'Complete jamming solutions using our RF modules',
          href: '/products/product-jammers'
        }
      ],
      cta: {
        title: 'Need Custom RF Solutions?',
        description: 'Our RF engineers can design components tailored to your exact specifications',
        primaryButton: { text: 'Discuss Requirements', href: '/contact' },
        secondaryButton: { text: 'View RF Catalog', href: '/downloads/rf-catalog.pdf' },
        tertiaryButton: { text: 'Request Samples', href: '/samples' }
      }
    },
  
    // 3. POWER SYSTEMS PRODUCTS
    'product-power-supplies': {
      slug: 'product-power-supplies',
      category: 'Power Systems',
      template: 'product',
      meta: {
        title: 'Power Supply Systems | RADCON Technologies',
        description: 'Custom power supplies and high voltage systems. SMPS, linear regulators, DC-DC converters up to 30kV for industrial and military applications.'
      },
      hero: {
        title: 'Power Supply Systems',
        subtitle: 'Custom Power Solutions from mW to kW',
        category: 'Power Systems',
        backgroundImage: '/images/products/power-systems-hero.jpg',
        breadcrumbs: [
          { label: 'Home', href: '/' },
          { label: 'Products', href: '/products' },
          { label: 'Power Systems' }
        ]
      },
      showcase: {
        image: '/images/products/power-supply-unit.jpg',
        title: 'Industrial & Military Power Solutions',
        highlights: [
          'Custom designs to specifications',
          'High voltage up to 30kV',
          'Efficiency >95%',
          'Multiple output configurations',
          'EMI/EMC compliant'
        ],
        specifications: {
          'Output Power': '1W - 5kW',
          'Voltage Range': '3.3V - 30kV',
          'Efficiency': 'Up to 95%',
          'Regulation': '±0.1%'
        },
        primaryButton: { text: 'Get Custom Quote', href: '/contact' },
        secondaryButton: { text: 'Design Guidelines', href: '/downloads/power-design.pdf' }
      },
      specifications: [
        {
          title: 'Switch Mode Power Supplies',
          specs: [
            { label: 'Topology', value: 'Flyback/Forward/Push-Pull', note: 'Optimized design' },
            { label: 'Input Voltage', value: '85-265VAC / 18-72VDC', note: 'Universal input' },
            { label: 'Output Power', value: '5W - 5kW', note: 'Scalable' },
            { label: 'Efficiency', value: '>90% typical', note: 'High efficiency' },
            { label: 'Regulation', value: '±0.1%', note: 'Tight regulation' },
            { label: 'Ripple', value: '<50mVp-p', note: 'Low noise' }
          ]
        },
        {
          title: 'High Voltage Systems',
          specs: [
            { label: 'Output Voltage', value: 'Up to 30kV', note: 'Customizable' },
            { label: 'Power Rating', value: '10W - 1kW', note: 'HV applications' },
            { label: 'Stability', value: '±0.01%', note: 'High stability' },
            { label: 'Ripple', value: '<0.1%', note: 'Low ripple HV' },
            { label: 'Protection', value: 'Arc/Short circuit', note: 'Safety features' },
            { label: 'Control', value: 'Analog/Digital', note: 'Remote capable' }
          ]
        },
        {
          title: 'Environmental Specifications',
          specs: [
            { label: 'Operating Temp', value: '-40°C to +85°C', note: 'Extended range' },
            { label: 'Storage Temp', value: '-55°C to +125°C', note: 'MIL-STD' },
            { label: 'Humidity', value: '95% RH', note: 'Conformal coating' },
            { label: 'Altitude', value: 'Up to 5000m', note: 'Derating applied' },
            { label: 'Shock/Vibration', value: 'MIL-STD-810G', note: 'Ruggedized' },
            { label: 'MTBF', value: '>100,000 hours', note: 'High reliability' }
          ]
        }
      ],
      applications: [
        {
          icon: 'industry',
          title: 'Industrial Equipment',
          description: 'Power supplies for automation and control systems',
          examples: ['PLCs', 'Motor drives', 'Process control']
        },
        {
          icon: 'aerospace',
          title: 'Avionics',
          description: 'Aircraft and helicopter power systems',
          examples: ['Cockpit displays', 'Navigation systems', 'Radar power']
        },
        {
          icon: 'medical',
          title: 'Medical Equipment',
          description: 'Isolated power for medical devices',
          examples: ['X-ray systems', 'MRI equipment', 'Patient monitors']
        },
        {
          icon: 'telecom',
          title: 'Telecommunications',
          description: 'Reliable power for communication infrastructure',
          examples: ['Base stations', 'Repeaters', 'Data centers']
        },
        {
          icon: 'defense',
          title: 'Defense Systems',
          description: 'Military-grade power solutions',
          examples: ['Radar systems', 'EW equipment', 'Vehicle electronics']
        },
        {
          icon: 'rail',
          title: 'Railway Systems',
          description: 'Locomotive and signaling power supplies',
          examples: ['Traction systems', 'Control electronics', 'Signaling']
        }
      ],
      features: [
        {
          icon: '⚡',
          title: 'High Efficiency',
          description: 'Latest topology and components for maximum efficiency',
          highlights: ['>95% peak', 'Low heat', 'Energy saving']
        },
        {
          icon: '🔄',
          title: 'Multiple Outputs',
          description: 'Single input to multiple isolated outputs',
          highlights: ['Up to 8 outputs', 'Independent regulation', 'Isolated']
        },
        {
          icon: '🛡️',
          title: 'Protection Suite',
          description: 'Comprehensive protection features',
          highlights: ['OVP/OCP/OTP', 'Short circuit', 'Reverse polarity']
        },
        {
          icon: '📊',
          title: 'Smart Monitoring',
          description: 'Digital monitoring and control interfaces',
          highlights: ['I2C/PMBus', 'Remote control', 'Telemetry']
        },
        {
          icon: '🌍',
          title: 'Universal Input',
          description: 'Wide input range for global applications',
          highlights: ['85-265VAC', '47-63Hz', 'PFC equipped']
        },
        {
          icon: '🔧',
          title: 'Modular Design',
          description: 'Configurable and scalable architecture',
          highlights: ['Hot-swap', 'N+1 redundancy', 'Parallel operation']
        }
      ],
      advantages: [
        {
          title: 'Custom Engineering',
          description: 'Tailored designs to meet exact specifications and form factors'
        },
        {
          title: 'Rapid Prototyping',
          description: 'Quick turnaround from concept to working prototype'
        },
        {
          title: 'Local Support',
          description: 'On-site support and quick response for modifications'
        },
        {
          title: 'Cost-Effective',
          description: 'Competitive pricing with no compromise on quality'
        }
      ],
      certifications: [
        'UL/cUL Listed',
        'CE Marked',
        'RoHS Compliant',
        'MIL-STD-704F',
        'DO-160 Qualified'
      ],
      warranty: {
        years: '3',
        description: 'Extended warranty with preventive maintenance options'
      },
      gallery: [
        {
          url: '/images/products/smps-module.jpg',
          caption: 'Modular SMPS design for rack systems'
        },
      ],
      relatedProducts: [
        {
          slug: 'product-embedded-boards',
          title: 'Power Management Boards',
          category: 'Embedded Systems',
          description: 'Intelligent power management solutions',
          href: '/products/product-embedded-boards'
        },
        {
          slug: 'product-rf-amplifiers',
          title: 'RF Power Amplifiers',
          category: 'RF & Microwave',
          description: 'High-efficiency RF power solutions',
          href: '/products/product-rf-amplifiers'
        }
      ],
      cta: {
        title: 'Power Your Innovation with Custom Solutions',
        description: 'Let our power systems experts design the perfect power solution for your application',
        primaryButton: { text: 'Request Design Consultation', href: '/contact' },
        secondaryButton: { text: 'Download Power Catalog', href: '/downloads/power-catalog.pdf' },
        tertiaryButton: { text: 'Calculate Requirements', href: '/tools/power-calculator' }
      }
    },
  
    // 4. EMBEDDED SYSTEMS PRODUCTS
    'product-embedded-boards': {
      slug: 'product-embedded-boards',
      category: 'Embedded Systems',
      template: 'product',
      meta: {
        title: 'Embedded Systems & IoT Boards | RADCON Technologies',
        description: 'Microcontroller solutions, IoT development boards, and custom embedded hardware. ARM, FPGA, DSP platforms for industrial and consumer applications.'
      },
      hero: {
        title: 'Embedded Systems & IoT Solutions',
        subtitle: 'Intelligent Hardware for Connected Applications',
        category: 'Embedded Systems',
        backgroundImage: '/images/products/embedded-boards-hero.jpg',
        breadcrumbs: [
          { label: 'Home', href: '/' },
          { label: 'Products', href: '/products' },
          { label: 'Embedded Systems' }
        ]
      },
      showcase: {
        image: '/images/products/embedded-board.jpg',
        title: 'Smart Embedded Platforms',
        highlights: [
          'ARM Cortex-M/A processors',
          'FPGA integration available',
          'Wireless connectivity options',
          'Industrial temperature range',
          'Real-time operating systems'
        ],
        specifications: {
          'Processors': 'ARM/FPGA/DSP',
          'Memory': 'Up to 4GB RAM',
          'Interfaces': 'Multiple I/O',
          'OS Support': 'Linux/RTOS'
        },
        primaryButton: { text: 'Explore Solutions', href: '/contact' },
        secondaryButton: { text: 'Development Tools', href: '/downloads/embedded-tools.pdf' }
      },
      specifications: [
        {
          title: 'Microcontroller Boards',
          specs: [
            { label: 'MCU Family', value: 'ARM Cortex-M0/M3/M4/M7', note: 'STM32/NXP/TI' },
            { label: 'Clock Speed', value: '32MHz - 480MHz', note: 'Application based' },
            { label: 'Flash Memory', value: '64KB - 2MB', note: 'Expandable' },
            { label: 'RAM', value: '8KB - 512KB', note: 'SRAM' },
            { label: 'I/O Pins', value: '20 - 140', note: 'GPIO configurable' },
            { label: 'Peripherals', value: 'UART/SPI/I2C/CAN/USB', note: 'Multiple channels' }
          ]
        },
        {
          title: 'IoT Development Boards',
          specs: [
            { label: 'Connectivity', value: 'WiFi/BLE/LoRa/NB-IoT', note: 'Multi-protocol' },
            { label: 'Sensors', value: 'Temperature/Humidity/Motion', note: 'Onboard' },
            { label: 'Power', value: 'Battery/Solar capable', note: 'Low power' },
            { label: 'Cloud Support', value: 'AWS/Azure/Google', note: 'MQTT/CoAP' },
            { label: 'Security', value: 'Crypto chip/Secure boot', note: 'Hardware security' },
            { label: 'Development', value: 'Arduino/MicroPython', note: 'Multiple IDEs' }
          ]
        },
        {
          title: 'FPGA/DSP Platforms',
          specs: [
            { label: 'FPGA', value: 'Xilinx/Intel FPGA', note: 'Spartan/Cyclone' },
            { label: 'Logic Cells', value: '10K - 500K', note: 'Scalable' },
            { label: 'DSP Slices', value: '40 - 2000', note: 'Signal processing' },
            { label: 'Memory', value: 'DDR3/DDR4 support', note: 'Up to 8GB' },
            { label: 'High-Speed I/O', value: 'PCIe/SATA/HDMI', note: 'Multiple lanes' },
            { label: 'Development', value: 'Vivado/Quartus', note: 'Tool support' }
          ]
        }
      ],
      applications: [
        {
          icon: 'industry',
          title: 'Industrial IoT',
          description: 'Smart factory and Industry 4.0 solutions',
          examples: ['Machine monitoring', 'Predictive maintenance', 'Asset tracking']
        },
        {
          icon: 'commercial',
          title: 'Smart Buildings',
          description: 'Building automation and energy management',
          examples: ['HVAC control', 'Lighting systems', 'Security integration']
        },
        {
          icon: 'automotive',
          title: 'Automotive',
          description: 'Vehicle electronics and telematics',
          examples: ['ECU modules', 'Infotainment', 'ADAS systems']
        },
        {
          icon: 'medical',
          title: 'Healthcare',
          description: 'Medical devices and patient monitoring',
          examples: ['Wearables', 'Remote monitoring', 'Diagnostic equipment']
        },
        {
          icon: 'energy',
          title: 'Energy Management',
          description: 'Smart grid and renewable energy control',
          examples: ['Smart meters', 'Solar inverters', 'Battery management']
        },
        {
          icon: 'research',
          title: 'Education & Research',
          description: 'Development platforms for learning and R&D',
          examples: ['University labs', 'Prototyping', 'Proof of concept']
        }
      ],
      features: [
        {
          icon: '🚀',
          title: 'High Performance',
          description: 'Powerful processors for demanding applications',
          highlights: ['Multi-core', 'Hardware acceleration', 'Real-time capable']
        },
        {
          icon: '🔌',
          title: 'Rich Connectivity',
          description: 'Multiple communication interfaces and protocols',
          highlights: ['Wired & wireless', 'Industrial protocols', 'Cloud ready']
        },
        {
          icon: '🔋',
          title: 'Low Power Design',
          description: 'Optimized for battery-powered applications',
          highlights: ['Sleep modes', 'Dynamic scaling', 'Energy harvesting']
        },
        {
          icon: '🛠️',
          title: 'Development Support',
          description: 'Comprehensive tools and documentation',
          highlights: ['SDK/BSP', 'Examples', 'Technical support']
        },
        {
          icon: '📐',
          title: 'Flexible Form Factors',
          description: 'Various sizes and configurations available',
          highlights: ['SOM/COM', 'SBC', 'Custom layouts']
        },
        {
          icon: '🔒',
          title: 'Security Features',
          description: 'Hardware-based security for critical applications',
          highlights: ['Secure boot', 'Encryption', 'Tamper detection']
        }
      ],
      advantages: [
        {
          title: 'Local Design Expertise',
          description: 'In-house hardware and firmware development capabilities'
        },
        {
          title: 'Customization',
          description: 'Tailored solutions for specific application requirements'
        },
        {
          title: 'Full Stack Support',
          description: 'Hardware, firmware, and software development services'
        },
        {
          title: 'Production Ready',
          description: 'From prototype to mass production support'
        }
      ],
      certifications: [
        'CE/FCC Certified',
        'RoHS Compliant',
        'Industrial Grade',
        'ISO 9001:2015'
      ],
      warranty: {
        years: '1',
        description: 'Hardware warranty with firmware updates included'
      },
      gallery: [
        {
          url: '/images/products/iot-board.jpg',
          caption: 'IoT development board with wireless connectivity'
        },
      ],
      relatedProducts: [
        {
          slug: 'product-power-supplies',
          title: 'Embedded Power Solutions',
          category: 'Power Systems',
          description: 'Power supplies for embedded systems',
          href: '/products/product-power-supplies'
        },
        {
          slug: 'product-communication',
          title: 'Wireless Modules',
          category: 'Communication Equipment',
          description: 'RF modules for embedded connectivity',
          href: '/products/product-communication'
        }
      ],
      cta: {
        title: 'Accelerate Your Embedded Development',
        description: 'Our embedded platforms and expertise help bring your ideas to market faster',
        primaryButton: { text: 'Discuss Your Project', href: '/contact' },
        secondaryButton: { text: 'Browse Development Kits', href: '/downloads/embedded-catalog.pdf' },
        tertiaryButton: { text: 'Get Technical Support', href: '/support' }
      }
    },
  
    // 5. COMMUNICATION EQUIPMENT
    'product-communication': {
      slug: 'product-communication',
      category: 'Communication Equipment',
      template: 'product',
      meta: {
        title: 'Communication Equipment | RADCON Technologies',
        description: 'Professional VHF/UHF communication systems. Walkie-talkies, base stations, and wireless communication solutions for critical operations.'
      },
      hero: {
        title: 'Communication Equipment',
        subtitle: 'Reliable Voice and Data Communication Solutions',
        category: 'Communication Systems',
        backgroundImage: '/images/products/communication-hero.jpg',
        breadcrumbs: [
          { label: 'Home', href: '/' },
          { label: 'Products', href: '/products' },
          { label: 'Communication Equipment' }
        ]
      },
      showcase: {
        image: '/images/products/walkie-talkie.jpg',
        title: 'Professional Radio Systems',
        highlights: [
          'VHF/UHF dual band',
          'Digital & analog modes',
          'Encrypted communication',
          'Long-range capability',
          'Rugged construction'
        ],
        specifications: {
          'Frequency': 'VHF/UHF',
          'Power Output': '5-50W',
          'Channels': '128-1024',
          'Range': 'Up to 50km'
        },
        primaryButton: { text: 'Request Quote', href: '/contact' },
        secondaryButton: { text: 'Product Brochure', href: '/downloads/comm-brochure.pdf' }
      },
      specifications: [
        {
          title: 'Portable Radios',
          specs: [
            { label: 'Frequency Range', value: '136-174MHz / 400-520MHz', note: 'VHF/UHF' },
            { label: 'Output Power', value: '5W / 4W', note: 'VHF/UHF' },
            { label: 'Channels', value: '128-512', note: 'Programmable' },
            { label: 'Battery Life', value: '12-20 hours', note: '2500mAh' },
            { label: 'Audio Output', value: '1W @ 8Ω', note: 'Clear audio' },
            { label: 'Encryption', value: 'AES-256', note: 'Optional' }
          ]
        },
        {
          title: 'Base Stations',
          specs: [
            { label: 'Power Output', value: '25-50W', note: 'Adjustable' },
            { label: 'Sensitivity', value: '-122dBm', note: '12dB SINAD' },
            { label: 'Coverage', value: 'Up to 50km', note: 'Line of sight' },
            { label: 'Duty Cycle', value: '100%', note: 'Continuous' },
            { label: 'Interface', value: 'Ethernet/Serial', note: 'Remote control' },
            { label: 'Power Supply', value: '13.8VDC / 220VAC', note: 'Dual input' }
          ]
        },
        {
          title: 'Digital Features',
          specs: [
            { label: 'Digital Mode', value: 'DMR Tier II/III', note: 'ETSI standard' },
            { label: 'Vocoder', value: 'AMBE+2', note: 'Digital voice' },
            { label: 'Data Rate', value: '9.6kbps', note: 'Packet data' },
            { label: 'GPS', value: 'Built-in', note: 'Location services' },
            { label: 'Text Messaging', value: 'SMS capable', note: '160 characters' },
            { label: 'Emergency', value: 'Man-down/Lone worker', note: 'Safety features' }
          ]
        }
      ],
      applications: [
        {
          icon: 'defense',
          title: 'Military & Defense',
          description: 'Tactical communication for military operations',
          examples: ['Squad radios', 'Command posts', 'Vehicle systems']
        },
        {
          icon: 'commercial',
          title: 'Public Safety',
          description: 'Emergency services communication networks',
          examples: ['Police', 'Fire departments', 'Emergency medical']
        },
        {
          icon: 'industry',
          title: 'Industrial',
          description: 'Plant-wide communication systems',
          examples: ['Oil & gas', 'Mining', 'Construction sites']
        },
        {
          icon: 'energy',
          title: 'Utilities',
          description: 'Critical infrastructure communication',
          examples: ['Power plants', 'Water treatment', 'Gas distribution']
        }
      ],
      features: [
        {
          icon: '📡',
          title: 'Wide Coverage',
          description: 'Extended range with repeater capability',
          highlights: ['50km range', 'Repeater mode', 'Network ready']
        },
        {
          icon: '🔐',
          title: 'Secure Communication',
          description: 'Military-grade encryption options',
          highlights: ['AES-256', 'Voice scrambling', 'Authentication']
        },
        {
          icon: '💪',
          title: 'Rugged Design',
          description: 'Built for harsh environments',
          highlights: ['IP67 rated', 'MIL-STD-810G', 'Shock resistant']
        },
        {
          icon: '🔋',
          title: 'Long Battery Life',
          description: 'Extended operation time',
          highlights: ['20+ hours', 'Quick charge', 'Battery save mode']
        },
        {
          icon: '🎯',
          title: 'GPS Tracking',
          description: 'Real-time location services',
          highlights: ['GPS/GLONASS', 'Geo-fencing', 'Route tracking']
        },
        {
          icon: '⚡',
          title: 'Emergency Features',
          description: 'Critical safety functions',
          highlights: ['Emergency button', 'Man-down', 'Lone worker']
        }
      ],
      advantages: [
        {
          title: 'Professional Grade',
          description: 'Commercial and military-grade equipment for mission-critical communications'
        },
        {
          title: 'Local Service',
          description: 'On-site installation, programming, and maintenance support'
        },
        {
          title: 'System Integration',
          description: 'Complete turnkey communication solutions'
        },
        {
          title: 'Custom Solutions',
          description: 'Tailored systems for specific operational requirements'
        }
      ],
      certifications: [
        'FCC Part 90',
        'CE RED',
        'IC Certified',
        'MIL-STD-810G',
        'IP67 Protection'
      ],
      warranty: {
        years: '2',
        description: 'Comprehensive warranty with service support'
      },
      gallery: [
        {
          url: '/images/products/radio-system.jpg',
          caption: 'Complete radio communication system'
        },
      
      ],
      relatedProducts: [
        {
          slug: 'product-rf-amplifiers',
          title: 'RF Amplifiers',
          category: 'RF & Microwave',
          description: 'Power amplifiers for extended range',
          href: '/products/product-rf-amplifiers'
        },
        {
          slug: 'product-power-supplies',
          title: 'Communication Power Systems',
          category: 'Power Systems',
          description: 'Reliable power for communication equipment',
          href: '/products/product-power-supplies'
        }
      ],
      cta: {
        title: 'Stay Connected with Professional Communication Solutions',
        description: 'Ensure reliable communication for your critical operations',
        primaryButton: { text: 'Get System Quote', href: '/contact' },
        secondaryButton: { text: 'Download Specifications', href: '/downloads/comm-specs.pdf' },
        tertiaryButton: { text: 'Schedule Demo', href: '/demo' }
      }
    },
  
    // 6. OPTRONICS
    'product-optronics': {
      slug: 'product-optronics',
      category: 'Optronics',
      template: 'product',
      meta: {
        title: 'Optical & Laser Systems | RADCON Technologies',
        description: 'Advanced optronics solutions including laser systems, optical sensors, imaging systems, and fiber optic components for defense and industrial applications.'
      },
      hero: {
        title: 'Optronics Solutions',
        subtitle: 'Precision Optical and Laser Technologies',
        category: 'Optical Systems',
        backgroundImage: '/images/products/optronics-hero.jpg',
        breadcrumbs: [
          { label: 'Home', href: '/' },
          { label: 'Products', href: '/products' },
          { label: 'Optronics' }
        ]
      },
      showcase: {
        image: '/images/products/laser-system.jpg',
        title: 'Advanced Optical Systems',
        highlights: [
          'Laser rangefinders',
          'Thermal imaging cameras',
          'Fiber optic systems',
          'Optical sensors',
          'Night vision compatible'
        ],
        specifications: {
          'Wavelength': '400-1550nm',
          'Range': 'Up to 20km',
          'Resolution': 'Sub-milliradian',
          'Sensitivity': 'Single photon'
        },
        primaryButton: { text: 'Technical Inquiry', href: '/contact' },
        secondaryButton: { text: 'Product Overview', href: '/downloads/optronics.pdf' }
      },
      specifications: [
        {
          title: 'Laser Systems',
          specs: [
            { label: 'Wavelength', value: '905/1064/1550nm', note: 'Eye-safe options' },
            { label: 'Power Output', value: '1mW - 10W', note: 'Class 1-4' },
            { label: 'Range', value: 'Up to 20km', note: 'Target dependent' },
            { label: 'Accuracy', value: '±1m', note: 'High precision' },
            { label: 'Pulse Rate', value: '1Hz - 10kHz', note: 'Adjustable' },
            { label: 'Beam Divergence', value: '<0.5mrad', note: 'Collimated' }
          ]
        },
        {
          title: 'Imaging Systems',
          specs: [
            { label: 'Sensor Type', value: 'CCD/CMOS/InGaAs', note: 'Application specific' },
            { label: 'Resolution', value: '640x480 to 4K', note: 'HD options' },
            { label: 'Frame Rate', value: '30-1000fps', note: 'High speed' },
            { label: 'Spectral Range', value: '400-1700nm', note: 'VIS/NIR/SWIR' },
            { label: 'Sensitivity', value: '0.001 lux', note: 'Low light' },
            { label: 'Dynamic Range', value: '>120dB', note: 'HDR capable' }
          ]
        },
        {
          title: 'Fiber Optic Components',
          specs: [
            { label: 'Fiber Type', value: 'SM/MM/PM', note: 'Various options' },
            { label: 'Wavelength', value: '850/1310/1550nm', note: 'Telecom bands' },
            { label: 'Insertion Loss', value: '<0.3dB', note: 'Low loss' },
            { label: 'Return Loss', value: '>50dB', note: 'High isolation' },
            { label: 'Power Handling', value: 'Up to 10W', note: 'High power' },
            { label: 'Connectors', value: 'FC/SC/LC/ST', note: 'Standard types' }
          ]
        }
      ],
      applications: [
        {
          icon: 'defense',
          title: 'Defense & Security',
          description: 'Military targeting and surveillance systems',
          examples: ['Rangefinders', 'Target designators', 'Night vision']
        },
        {
          icon: 'aerospace',
          title: 'Aerospace',
          description: 'Aviation and space optical systems',
          examples: ['LIDAR', 'Star trackers', 'Docking sensors']
        },
        {
          icon: 'industry',
          title: 'Industrial',
          description: 'Precision measurement and inspection',
          examples: ['3D scanning', 'Quality control', 'Machine vision']
        },
        {
          icon: 'medical',
          title: 'Medical',
          description: 'Biomedical imaging and diagnostics',
          examples: ['Endoscopy', 'OCT systems', 'Laser therapy']
        }
      ],
      features: [
        {
          icon: '🎯',
          title: 'High Precision',
          description: 'Sub-milliradian accuracy for critical applications',
          highlights: ['Precise optics', 'Stable mounts', 'Calibrated']
        },
        {
          icon: '🌙',
          title: 'Day/Night Operation',
          description: 'Multi-spectral capability for 24/7 operation',
          highlights: ['Thermal imaging', 'Low light', 'NIR illumination']
        },
        {
          icon: '🔬',
          title: 'Advanced Optics',
          description: 'Custom optical designs and coatings',
          highlights: ['AR coatings', 'Filters', 'Custom lenses']
        },
        {
          icon: '💾',
          title: 'Digital Integration',
          description: 'Modern interfaces for system integration',
          highlights: ['GigE Vision', 'USB3', 'CoaXPress']
        },
        {
          icon: '🌡️',
          title: 'Environmental',
          description: 'Ruggedized for harsh conditions',
          highlights: ['Sealed optics', 'Thermal stable', 'Vibration resistant']
        },
        {
          icon: '⚙️',
          title: 'Modular Design',
          description: 'Configurable systems for various applications',
          highlights: ['Interchangeable', 'Upgradeable', 'Scalable']
        }
      ],
      advantages: [
        {
          title: 'Optical Expertise',
          description: 'Experienced team in optical design and integration'
        },
        {
          title: 'Custom Solutions',
          description: 'Tailored optical systems for specific requirements'
        },
        {
          title: 'System Integration',
          description: 'Complete opto-electronic solutions'
        },
        {
          title: 'Local Support',
          description: 'On-site alignment and calibration services'
        }
      ],
      certifications: [
        'IEC 60825-1 Laser Safety',
        'MIL-STD-810G',
        'IP65 Environmental',
        'CE/FCC Compliant'
      ],
      warranty: {
        years: '1',
        description: 'Standard warranty with calibration services'
      },
      gallery: [
        {
          url: '/images/products/laser-rangefinder.jpg',
          caption: 'Military-grade laser rangefinder system'
        },
      ],
      relatedProducts: [
        {
          slug: 'product-embedded-boards',
          title: 'Image Processing Boards',
          category: 'Embedded Systems',
          description: 'Processing platforms for optical systems',
          href: '/products/product-embedded-boards'
        },
        {
          slug: 'product-power-supplies',
          title: 'Laser Power Supplies',
          category: 'Power Systems',
          description: 'Precision power for laser systems',
          href: '/products/product-power-supplies'
        }
      ],
      cta: {
        title: 'See Beyond Limits with Advanced Optronics',
        description: 'Explore our optical and laser solutions for your critical applications',
        primaryButton: { text: 'Discuss Requirements', href: '/contact' },
        secondaryButton: { text: 'View Capabilities', href: '/downloads/optronics-catalog.pdf' },
        tertiaryButton: { text: 'Request Demo', href: '/demo' }
      }
    },
  
    // 7. NAVIGATION SYSTEMS
    'product-navigation': {
      slug: 'product-navigation',
      category: 'Navigation',
      template: 'product',
      meta: {
        title: 'Navigation Systems | RADCON Technologies',
        description: 'GPS, inertial navigation, marine and aviation navigation systems. High-precision positioning and navigation solutions for critical applications.'
      },
      hero: {
        title: 'Navigation Systems',
        subtitle: 'Precision Positioning and Navigation Solutions',
        category: 'Navigation Technology',
        backgroundImage: '/images/products/navigation-hero.jpg',
        breadcrumbs: [
          { label: 'Home', href: '/' },
          { label: 'Products', href: '/products' },
          { label: 'Navigation' }
        ]
      },
      showcase: {
        image: '/images/products/gps-system.jpg',
        title: 'Advanced Navigation Solutions',
        highlights: [
          'Multi-GNSS support',
          'INS/GPS integration',
          'RTK centimeter accuracy',
          'Marine AIS systems',
          'Aviation certified'
        ],
        specifications: {
          'Accuracy': '<1m CEP',
          'Update Rate': 'Up to 100Hz',
          'Channels': '184 parallel',
          'Time to Fix': '<30 seconds'
        },
        primaryButton: { text: 'Get Quote', href: '/contact' },
        secondaryButton: { text: 'Technical Specs', href: '/downloads/navigation.pdf' }
      },
      specifications: [
        {
          title: 'GPS/GNSS Systems',
          specs: [
            { label: 'Constellations', value: 'GPS/GLONASS/Galileo/BeiDou', note: 'Multi-GNSS' },
            { label: 'Accuracy', value: '1.5m CEP / 1cm RTK', note: 'Mode dependent' },
            { label: 'Update Rate', value: '1-100Hz', note: 'Configurable' },
            { label: 'Sensitivity', value: '-165dBm', note: 'Tracking' },
            { label: 'Time to Fix', value: '<30s cold start', note: 'Open sky' },
            { label: 'Velocity Accuracy', value: '0.05m/s', note: 'RMS' }
          ]
        },
        {
          title: 'Inertial Navigation',
          specs: [
            { label: 'IMU Type', value: 'MEMS/FOG', note: 'Application based' },
            { label: 'Gyro Bias', value: '<0.5°/hr', note: 'High stability' },
            { label: 'Accelerometer', value: '±40g range', note: 'High-g option' },
            { label: 'Data Rate', value: 'Up to 1000Hz', note: 'High bandwidth' },
            { label: 'Heading Accuracy', value: '0.1° RMS', note: 'GPS aided' },
            { label: 'Attitude', value: 'Roll/Pitch/Yaw', note: 'Full 3D' }
          ]
        },
        {
          title: 'Marine Navigation',
          specs: [
            { label: 'AIS Class', value: 'Class A/B', note: 'IMO compliant' },
            { label: 'Radar Interface', value: 'ARPA compatible', note: 'Integration' },
            { label: 'Chart System', value: 'ENC/RNC', note: 'Electronic charts' },
            { label: 'Interfaces', value: 'NMEA 0183/2000', note: 'Standard' },
            { label: 'Display', value: '10.4" - 19" sunlight', note: 'Marine grade' },
            { label: 'Certification', value: 'IEC 61108/61162', note: 'Marine standards' }
          ]
        }
      ],
      applications: [
        {
          icon: 'aerospace',
          title: 'Aviation',
          description: 'Aircraft navigation and landing systems',
          examples: ['GPS/INS', 'ILS receivers', 'Moving maps']
        },
        {
          icon: 'marine',
          title: 'Marine',
          description: 'Ship navigation and positioning',
          examples: ['ECDIS', 'AIS transponders', 'Autopilot']
        },
        {
          icon: 'automotive',
          title: 'Land Vehicles',
          description: 'Vehicle tracking and navigation',
          examples: ['Fleet management', 'Autonomous vehicles', 'Survey']
        },
        {
          icon: 'defense',
          title: 'Defense',
          description: 'Military navigation systems',
          examples: ['Missile guidance', 'UAV navigation', 'Soldier systems']
        }
      ],
      features: [
        {
          icon: '🛰️',
          title: 'Multi-GNSS',
          description: 'Support for all major satellite systems',
          highlights: ['GPS', 'GLONASS', 'Galileo', 'BeiDou']
        },
        {
          icon: '🎯',
          title: 'High Accuracy',
          description: 'Centimeter-level positioning with RTK',
          highlights: ['RTK/PPP', 'SBAS', 'Dual antenna']
        },
        {
          icon: '🔄',
          title: 'Sensor Fusion',
          description: 'INS/GPS integration for continuous navigation',
          highlights: ['Kalman filter', 'Dead reckoning', 'Smooth output']
        },
        {
          icon: '🛡️',
          title: 'Anti-Jamming',
          description: 'Protection against GPS interference',
          highlights: ['Multi-frequency', 'Null steering', 'Detection']
        },
        {
          icon: '📊',
          title: 'Data Logging',
          description: 'Comprehensive data recording capabilities',
          highlights: ['Raw data', 'Post-processing', 'Analysis tools']
        },
        {
          icon: '🌐',
          title: 'Integration',
          description: 'Standard interfaces for easy integration',
          highlights: ['Serial/Ethernet', 'CAN bus', 'APIs']
        }
      ],
      advantages: [
        {
          title: 'High Precision',
          description: 'Survey-grade accuracy for critical applications'
        },
        {
          title: 'Robust Performance',
          description: 'Reliable operation in challenging environments'
        },
        {
          title: 'Custom Integration',
          description: 'Tailored solutions for specific platforms'
        },
        {
          title: 'Local Support',
          description: 'Installation and calibration services'
        }
      ],
      certifications: [
        'IEC 61108 Maritime',
        'DO-178C Aviation',
        'MIL-STD-1553',
        'NMEA Certified'
      ],
      warranty: {
        years: '2',
        description: 'Warranty with calibration and support services'
      },
      gallery: [
        {
          url: '/images/products/gps-receiver.jpg',
          caption: 'High-precision GNSS receiver'
        },
      ],
      relatedProducts: [
        {
          slug: 'product-aviation',
          title: 'Aviation Displays',
          category: 'Aviation Industry',
          description: 'Display systems for navigation data',
          href: '/products/product-aviation'
        },
        {
          slug: 'product-embedded-boards',
          title: 'Navigation Computers',
          category: 'Embedded Systems',
          description: 'Processing platforms for navigation',
          href: '/products/product-embedded-boards'
        }
      ],
      cta: {
        title: 'Navigate with Confidence',
        description: 'Precision navigation solutions for air, land, and sea applications',
        primaryButton: { text: 'Discuss Your Needs', href: '/contact' },
        secondaryButton: { text: 'Download Brochure', href: '/downloads/navigation-brochure.pdf' },
        tertiaryButton: { text: 'View Applications', href: '/applications' }
      }
    },
  
    // 8. AVIATION INDUSTRY
    'product-aviation': {
      slug: 'product-aviation',
      category: 'Aviation Industry',
      template: 'product',
      meta: {
        title: 'Aviation Systems | RADCON Technologies',
        description: 'Multi-function displays, radar altimeters, and avionics systems for helicopters and aircraft. Certified aviation electronics and instruments.'
      },
      hero: {
        title: 'Aviation Industry Solutions',
        subtitle: 'Advanced Avionics for Modern Aircraft',
        category: 'Aviation Systems',
        backgroundImage: '/images/products/aviation-hero.jpg',
        breadcrumbs: [
          { label: 'Home', href: '/' },
          { label: 'Products', href: '/products' },
          { label: 'Aviation Industry' }
        ]
      },
      showcase: {
        image: '/images/products/mfd-display.jpg',
        title: 'Certified Avionics Systems',
        highlights: [
          'Multi-function displays',
          'Radar altimeters',
          'Glass cockpit solutions',
          'Night vision compatible',
          'DO-178C certified'
        ],
        specifications: {
          'Display Size': '10.4" - 15"',
          'Resolution': '1024x768 - 4K',
          'Brightness': '1500 cd/m²',
          'MTBF': '>30,000 hrs'
        },
        primaryButton: { text: 'Aviation Inquiry', href: '/contact' },
        secondaryButton: { text: 'Product Details', href: '/downloads/aviation.pdf' }
      },
      specifications: [
        {
          title: 'Multi-Function Displays',
          specs: [
            { label: 'Screen Size', value: '10.4" / 12.1" / 15"', note: 'Multiple options' },
            { label: 'Resolution', value: '1024x768 to 1920x1080', note: 'HD available' },
            { label: 'Brightness', value: '1500 cd/m²', note: 'Sunlight readable' },
            { label: 'Touch Screen', value: 'Resistive/Capacitive', note: 'Glove compatible' },
            { label: 'Interfaces', value: 'ARINC 429/MIL-1553', note: 'Avionics bus' },
            { label: 'NVG Compatible', value: 'NVIS A/B', note: 'Night vision' }
          ]
        },
        {
          title: 'Radar Altimeters',
          specs: [
            { label: 'Frequency', value: '4.2-4.4 GHz', note: 'C-band' },
            { label: 'Range', value: '0-2500 ft', note: 'AGL' },
            { label: 'Accuracy', value: '±2 ft or 2%', note: 'Whichever greater' },
            { label: 'Update Rate', value: '40Hz', note: 'Fast response' },
            { label: 'Output', value: 'ARINC 429/Analog', note: 'Dual output' },
            { label: 'Power', value: '28VDC / 115VAC', note: 'Aircraft power' }
          ]
        },
        {
          title: 'Environmental Specifications',
          specs: [
            { label: 'Operating Temp', value: '-55°C to +70°C', note: 'DO-160G' },
            { label: 'Altitude', value: 'Up to 55,000 ft', note: 'Unpressurized' },
            { label: 'Vibration', value: 'DO-160G Cat A', note: 'Helicopter' },
            { label: 'EMI/EMC', value: 'DO-160G', note: 'Level 3' },
            { label: 'Lightning', value: 'DO-160G Level 3', note: 'Protected' },
            { label: 'MTBF', value: '>30,000 hours', note: 'High reliability' }
          ]
        }
      ],
      applications: [
        {
          icon: 'aerospace',
          title: 'Helicopters',
          description: 'Rotorcraft avionics and displays',
          examples: ['Military helicopters', 'EMS aircraft', 'Utility helicopters']
        },
        {
          icon: 'commercial',
          title: 'Fixed-Wing',
          description: 'Aircraft instrumentation systems',
          examples: ['Business jets', 'Transport aircraft', 'Training aircraft']
        },
        {
          icon: 'defense',
          title: 'Military Aviation',
          description: 'Combat aircraft systems',
          examples: ['Fighter jets', 'Transport aircraft', 'UAVs']
        },
        {
          icon: 'commercial',
          title: 'General Aviation',
          description: 'Light aircraft upgrades',
          examples: ['Glass cockpit', 'Retrofit solutions', 'Experimental']
        }
      ],
      features: [
        {
          icon: '🖥️',
          title: 'Glass Cockpit',
          description: 'Modern digital display technology',
          highlights: ['Synthetic vision', 'Moving maps', 'Engine monitoring']
        },
        {
          icon: '🌙',
          title: 'NVG Compatible',
          description: 'Night vision goggle compatibility',
          highlights: ['NVIS filtering', 'Dimming control', 'IR suppression']
        },
        {
          icon: '📡',
          title: 'Data Integration',
          description: 'Multiple data source integration',
          highlights: ['GPS/INS', 'Weather radar', 'TCAS/TAWS']
        },
        {
          icon: '✈️',
          title: 'Certified Design',
          description: 'Meets aviation standards',
          highlights: ['DO-178C', 'DO-254', 'TSO approved']
        },
        {
          icon: '🔄',
          title: 'Redundancy',
          description: 'Built-in backup systems',
          highlights: ['Dual processors', 'Backup displays', 'Failover']
        },
        {
          icon: '🛠️',
          title: 'Easy Integration',
          description: 'Standard avionics interfaces',
          highlights: ['ARINC 429', 'MIL-STD-1553', 'Ethernet']
        }
      ],
      advantages: [
        {
          title: 'Aviation Expertise',
          description: 'Experienced in military and civilian aviation systems'
        },
        {
          title: 'Certification Support',
          description: 'Assistance with aviation certification processes'
        },
        {
          title: 'Custom Solutions',
          description: 'Tailored avionics for specific aircraft'
        },
        {
          title: 'Lifecycle Support',
          description: 'Long-term maintenance and upgrades'
        }
      ],
      certifications: [
        'DO-178C Software',
        'DO-254 Hardware',
        'DO-160G Environmental',
        'TSO Authorization',
        'EASA/FAA Approved'
      ],
      warranty: {
        years: '3',
        description: 'Aviation-grade warranty with AOG support'
      },
      gallery: [
        {
          url: '/images/products/radar-altimeter.jpg',
          caption: 'Compact radar altimeter unit'
        }
      ],
      relatedProducts: [
        {
          slug: 'product-navigation',
          title: 'Aviation GPS',
          category: 'Navigation',
          description: 'GPS systems for aviation',
          href: '/products/product-navigation'
        },
        {
          slug: 'product-power-supplies',
          title: 'Aircraft Power',
          category: 'Power Systems',
          description: 'Aviation power converters',
          href: '/products/product-power-supplies'
        }
      ],
      cta: {
        title: 'Elevate Your Aircraft Capabilities',
        description: 'Modern avionics solutions for enhanced safety and performance',
        primaryButton: { text: 'Contact Aviation Team', href: '/contact' },
        secondaryButton: { text: 'Download Specifications', href: '/downloads/aviation-specs.pdf' },
        tertiaryButton: { text: 'Request Certification Info', href: '/certifications' }
      }
    },
  
    // 9. RADAR PARTS
    'product-radar-parts': {
      slug: 'product-radar-parts',
      category: 'Radar Systems',
      template: 'product',
      meta: {
        title: 'Radar System Components | RADCON Technologies',
        description: 'Indigenous development of radar parts including camera modules, TFT displays, memory units, video amplifiers, and control cards for radar systems.'
      },
      hero: {
        title: 'Indigenous Radar Components',
        subtitle: 'Locally Developed Radar System Parts',
        category: 'Radar Technology',
        backgroundImage: '/images/products/radar-parts-hero.jpg',
        breadcrumbs: [
          { label: 'Home', href: '/' },
          { label: 'Products', href: '/products' },
          { label: 'Radar Parts' }
        ]
      },
      showcase: {
        image: '/images/products/radar-components.jpg',
        title: 'Radar System Building Blocks',
        highlights: [
          'Optical tracking cameras',
          'High-resolution displays',
          'Real-time processing cards',
          'Video signal processing',
          'Indigenous development'
        ],
        specifications: {
          'Processing': 'Real-time',
          'Resolution': 'Up to 4K',
          'Frame Rate': '60-240fps',
          'Latency': '<10ms'
        },
        primaryButton: { text: 'Technical Discussion', href: '/contact' },
        secondaryButton: { text: 'Component Catalog', href: '/downloads/radar-parts.pdf' }
      },
      specifications: [
        {
          title: 'Camera Modules',
          specs: [
            { label: 'Sensor Type', value: 'CCD/CMOS', note: 'High sensitivity' },
            { label: 'Resolution', value: '2MP - 8MP', note: 'HD to 4K' },
            { label: 'Frame Rate', value: '60-240fps', note: 'High speed' },
            { label: 'Interface', value: 'GigE/CameraLink', note: 'Standard' },
            { label: 'Lens Mount', value: 'C/CS/F-mount', note: 'Flexible' },
            { label: 'Synchronization', value: 'GenLock/Trigger', note: 'Multi-camera' }
          ]
        },
        {
          title: 'TFT Displays',
          specs: [
            { label: 'Size', value: '8.4" to 21"', note: 'Various sizes' },
            { label: 'Resolution', value: '800x600 to 1920x1080', note: 'Up to FHD' },
            { label: 'Brightness', value: '1000-1500 cd/m²', note: 'Sunlight readable' },
            { label: 'Interface', value: 'LVDS/DVI/HDMI', note: 'Digital inputs' },
            { label: 'Touch', value: 'Resistive option', note: 'Rugged touch' },
            { label: 'Operating Temp', value: '-30°C to +70°C', note: 'Wide range' }
          ]
        },
        {
          title: 'Processing Cards',
          specs: [
            { label: 'Processor', value: 'FPGA/DSP/GPU', note: 'High performance' },
            { label: 'Memory', value: '4-16GB DDR4', note: 'High bandwidth' },
            { label: 'Interface', value: 'PCIe/VME/VPX', note: 'Backplane' },
            { label: 'Processing', value: '100 GFLOPS', note: 'Real-time' },
            { label: 'I/O', value: 'Multiple channels', note: 'Flexible I/O' },
            { label: 'Cooling', value: 'Conduction/Air', note: 'Thermal management' }
          ]
        }
      ],
      applications: [
        {
          icon: 'defense',
          title: 'Air Defense Radar',
          description: 'Components for air surveillance systems',
          examples: ['Search radar', 'Tracking radar', 'Fire control']
        },
        {
          icon: 'marine',
          title: 'Marine Radar',
          description: 'Naval radar system components',
          examples: ['Navigation radar', 'Surface search', 'Periscope detection']
        },
        {
          icon: 'aerospace',
          title: 'Ground Radar',
          description: 'Ground-based radar systems',
          examples: ['ATC radar', 'Weather radar', 'Border surveillance']
        },
        {
          icon: 'research',
          title: 'Research Systems',
          description: 'Experimental radar development',
          examples: ['University research', 'Prototype systems', 'Test beds']
        }
      ],
      features: [
        {
          icon: '🏭',
          title: 'Local Manufacturing',
          description: 'Indigenous development and production',
          highlights: ['Import substitution', 'Quick delivery', 'Cost effective']
        },
        {
          icon: '⚡',
          title: 'Real-Time Processing',
          description: 'High-speed signal processing capabilities',
          highlights: ['Low latency', 'Parallel processing', 'Pipeline architecture']
        },
        {
          icon: '🔧',
          title: 'Modular Design',
          description: 'Interchangeable and upgradeable components',
          highlights: ['Standard interfaces', 'Plug and play', 'Scalable']
        },
        {
          icon: '🎯',
          title: 'Radar Optimized',
          description: 'Designed specifically for radar applications',
          highlights: ['Synchronized', 'Low noise', 'High dynamic range']
        },
        {
          icon: '🛡️',
          title: 'Military Grade',
          description: 'Ruggedized for defense applications',
          highlights: ['MIL-STD', 'EMI/EMC', 'Environmental']
        },
        {
          icon: '🔄',
          title: 'Backward Compatible',
          description: 'Upgrade existing radar systems',
          highlights: ['Legacy support', 'Form fit function', 'Easy integration']
        }
      ],
      advantages: [
        {
          title: 'Indigenous Capability',
          description: 'Reduced dependence on imports for critical radar components'
        },
        {
          title: 'Custom Development',
          description: 'Tailored solutions for specific radar requirements'
        },
        {
          title: 'Quick Support',
          description: 'Local manufacturing ensures rapid delivery and support'
        },
        {
          title: 'Cost Effective',
          description: 'Competitive pricing compared to imported alternatives'
        }
      ],
      certifications: [
        'MIL-STD-810G',
        'MIL-STD-461F',
        'ISO 9001:2015',
        'IPC Class 3'
      ],
      warranty: {
        years: '2',
        description: 'Comprehensive warranty with local support'
      },
      gallery: [
        {
          url: '/images/products/processing-card.jpg',
          caption: 'Real-time radar processing card'
        }
      ],
      relatedProducts: [
        {
          slug: 'product-rf-amplifiers',
          title: 'Radar Transmitters',
          category: 'RF & Microwave',
          description: 'RF components for radar systems',
          href: '/products/product-rf-amplifiers'
        },
        {
          slug: 'product-power-supplies',
          title: 'Radar Power Systems',
          category: 'Power Systems',
          description: 'Power supplies for radar equipment',
          href: '/products/product-power-supplies'
        }
      ],
      cta: {
        title: 'Modernize Your Radar Systems',
        description: 'Upgrade with locally developed, cost-effective radar components',
        primaryButton: { text: 'Discuss Requirements', href: '/contact' },
        secondaryButton: { text: 'View Components', href: '/downloads/radar-catalog.pdf' },
        tertiaryButton: { text: 'Technical Support', href: '/support' }
      }
    }
  };
  
  // Export categories for navigation
  export const productCategories = [
    {
      title: 'Life-Saving Equipment',
      slug: 'product-jammers',
      description: 'Electronic countermeasure systems for protection'
    },
    {
      title: 'RF & Microwave',
      slug: 'product-rf-amplifiers',
      description: 'High-performance RF components and systems'
    },
    {
      title: 'Power Systems',
      slug: 'product-power-supplies',
      description: 'Custom power solutions for all applications'
    },
    {
      title: 'Embedded Systems',
      slug: 'product-embedded-boards',
      description: 'Intelligent hardware and IoT solutions'
    },
    {
      title: 'Communication Equipment',
      slug: 'product-communication',
      description: 'Professional radio communication systems'
    },
    {
      title: 'Optronics',
      slug: 'product-optronics',
      description: 'Optical and laser technology solutions'
    },
    {
      title: 'Navigation',
      slug: 'product-navigation',
      description: 'Precision positioning and navigation'
    },
    {
      title: 'Aviation Industry',
      slug: 'product-aviation',
      description: 'Certified avionics and displays'
    },
    {
      title: 'Radar Parts',
      slug: 'product-radar-parts',
      description: 'Indigenous radar system components'
    }
  ];