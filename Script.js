document.addEventListener('DOMContentLoaded', function() {
            // Initialize services if not exists
            if (!localStorage.getItem('serenitySpaServices')) {
                const defaultServices = [
                    {
                        id: 1,
                        name: "Swedish Massage",
                        duration: "60 mins",
                        price: 85,
                        description: "A gentle, relaxing massage that uses long strokes, kneading, and circular movements to help relax and energize you."
                    },
                    {
                        id: 2,
                        name: "Deep Tissue Massage",
                        duration: "90 mins",
                        price: 120,
                        description: "Targets the deeper layers of muscle and connective tissue to help with muscle damage from injuries."
                    },
                    {
                        id: 3,
                        name: "Aroma Therapy",
                        duration: "60 mins",
                        price: 95,
                        description: "Uses essential oils to enhance physical and emotional well-being through the sense of smell and absorption."
                    },
                    {
                        id: 4,
                        name: "Thai Massage",
                        duration: "90 mins",
                        price: 110,
                        description: "An ancient healing system combining acupressure, Indian Ayurvedic principles, and assisted yoga postures."
                    },
                    {
                        id: 5,
                        name: "Couple Massage",
                        duration: "60 mins",
                        price: 160,
                        description: "Enjoy side-by-side massages with your partner in a private, serene setting with two therapists."
                    },
                    {
                        id: 6,
                        name: "Body Spa & Scrub",
                        duration: "120 mins",
                        price: 150,
                        description: "A full-body exfoliation treatment that removes dead skin cells, leaving your skin smooth and refreshed."
                    }
                ];
                localStorage.setItem('serenitySpaServices', JSON.stringify(defaultServices));
            }

            // Initialize bookings if not exists
            if (!localStorage.getItem('serenitySpaBookings')) {
                const defaultBookings = [
                    {
                        id: 1,
                        name: "John Doe",
                        phone: "(123) 456-7890",
                        email: "john@example.com",
                        service: "Swedish Massage",
                        date: "2023-12-15",
                        time: "14:00",
                        message: "Looking forward to my first massage!",
                        status: "confirmed"
                    },
                    {
                        id: 2,
                        name: "Jane Smith",
                        phone: "(987) 654-3210",
                        email: "jane@example.com",
                        service: "Deep Tissue Massage",
                        date: "2023-12-10",
                        time: "11:00",
                        message: "Need help with shoulder pain",
                        status: "pending"
                    }
                ];
                localStorage.setItem('serenitySpaBookings', JSON.stringify(defaultBookings));
            }

            // Initialize messages if not exists
            if (!localStorage.getItem('serenitySpaMessages')) {
                const defaultMessages = [
                    {
                        id: 1,
                        name: "Michael Brown",
                        email: "michael@example.com",
                        phone: "(555) 123-4567",
                        message: "Do you offer gift certificates?",
                        date: "2023-11-28"
                    },
                    {
                        id: 2,
                        name: "Emily Davis",
                        email: "emily@example.com",
                        phone: "(555) 987-6543",
                        message: "Looking for couples massage packages for our anniversary.",
                        date: "2023-11-25"
                    }
                ];
                localStorage.setItem('serenitySpaMessages', JSON.stringify(defaultMessages));
            }

            // Initialize gallery images
            const galleryImages = [
                "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
                "https://images.unsplash.com/photo-1597347316203-4ae6f6c7c8b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
                "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                "https://images.unsplash.com/photo-1560073744-7643b964ca61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            ];
            localStorage.setItem('serenitySpaGallery', JSON.stringify(galleryImages));

            // Load initial data
            loadServices();
            loadGallery();
            setupEventListeners();
            checkAuthStatus();
            updateBookingFormServices();
        });

        // Load services to the services page
        function loadServices() {
            const services = JSON.parse(localStorage.getItem('serenitySpaServices'));
            const servicesContainer = document.getElementById('services-container');
            
            if (!servicesContainer) return;
            
            servicesContainer.innerHTML = '';
            
            services.forEach(service => {
                const serviceCard = document.createElement('div');
                serviceCard.className = 'service-card';
                serviceCard.innerHTML = `
                    <div class="service-img" style="background-image: url('https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')"></div>
                    <div class="service-content">
                        <h3>${service.name}</h3>
                        <span class="service-duration">${service.duration}</span>
                        <div class="service-price">$${service.price}</div>
                        <p class="service-description">${service.description}</p>
                        <a href="#booking" class="btn btn-primary" style="width: 100%; text-align: center;">Book Now</a>
                    </div>
                `;
                servicesContainer.appendChild(serviceCard);
            });
        }

        // Load gallery images
        function loadGallery() {
            const galleryImages = JSON.parse(localStorage.getItem('serenitySpaGallery'));
            const galleryContainer = document.getElementById('gallery-container');
            
            if (!galleryContainer) return;
            
            galleryContainer.innerHTML = '';
            
            galleryImages.forEach((imageUrl, index) => {
                const galleryItem = document.createElement('div');
                galleryItem.className = 'gallery-item';
                galleryItem.innerHTML = `<img src="${imageUrl}" alt="Spa image ${index + 1}" loading="lazy">`;
                galleryItem.addEventListener('click', () => openLightbox(imageUrl));
                galleryContainer.appendChild(galleryItem);
            });
        }

        // Update booking form with services
        function updateBookingFormServices() {
            const services = JSON.parse(localStorage.getItem('serenitySpaServices'));
            const serviceSelect = document.getElementById('service');
            
            if (!serviceSelect) return;
            
            // Clear existing options except the first one
            while (serviceSelect.options.length > 1) {
                serviceSelect.remove(1);
            }
            
            // Add services to select
            services.forEach(service => {
                const option = document.createElement('option');
                option.value = service.name;
                option.textContent = `${service.name} (${service.duration}) - $${service.price}`;
                serviceSelect.appendChild(option);
            });
        }

        // Setup event listeners
        function setupEventListeners() {
            // Mobile menu toggle
            const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
            const navLinks = document.getElementById('nav-links');
            
            if (mobileMenuToggle) {
                mobileMenuToggle.addEventListener('click', () => {
                    navLinks.classList.toggle('active');
                });
            }

            // Navigation
            const navLinksElements = document.querySelectorAll('.nav-link');
            navLinksElements.forEach(link => {
                link.addEventListener('click', function(e) {
                    // Handle admin link separately
                    if (this.getAttribute('href') === '#admin-login') {
                        e.preventDefault();
                        showAdminLogin();
                        return;
                    }
                    
                    // Regular navigation
                    e.preventDefault();
                    const targetId = this.getAttribute('href').substring(1);
                    
                    // Update active nav link
                    navLinksElements.forEach(l => l.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Close mobile menu if open
                    navLinks.classList.remove('active');
                    
                    // Scroll to section
                    if (targetId === 'home') {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else {
                        const targetElement = document.getElementById(targetId);
                        if (targetElement) {
                            window.scrollTo({
                                top: targetElement.offsetTop - 80,
                                behavior: 'smooth'
                            });
                        }
                    }
                });
            });

            // Booking form submission
            const bookingForm = document.getElementById('booking-form');
            if (bookingForm) {
                bookingForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    const booking = {
                        id: Date.now(),
                        name: document.getElementById('name').value,
                        phone: document.getElementById('phone').value,
                        email: document.getElementById('email').value,
                        service: document.getElementById('service').value,
                        date: document.getElementById('date').value,
                        time: document.getElementById('time').value,
                        message: document.getElementById('message').value,
                        status: 'pending'
                    };
                    
                    // Save booking
                    const bookings = JSON.parse(localStorage.getItem('serenitySpaBookings'));
                    bookings.push(booking);
                    localStorage.setItem('serenitySpaBookings', JSON.stringify(bookings));
                    
                    // Show success message
                    const bookingMessage = document.getElementById('booking-message');
                    bookingMessage.innerHTML = `<div class="alert alert-success">Booking submitted successfully! We'll contact you shortly to confirm.</div>`;
                    
                    // Optional: Redirect to WhatsApp
                    const whatsappMessage = `Hello, I'd like to book a ${booking.service} on ${booking.date} at ${booking.time}. My name is ${booking.name}.`;
                    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(whatsappMessage)}`;
                    
                    // Clear form
                    bookingForm.reset();
                    
                    // Update admin panel if open
                    if (document.getElementById('admin-panel') && !document.getElementById('admin-panel').classList.contains('hidden')) {
                        loadAdminBookings();
                    }
                    
                    // Scroll to message
                    bookingMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
                });
            }

            // Contact form submission
            const contactForm = document.getElementById('contact-form');
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    const message = {
                        id: Date.now(),
                        name: document.getElementById('contact-name').value,
                        email: document.getElementById('contact-email').value,
                        phone: document.getElementById('contact-phone').value,
                        message: document.getElementById('contact-message-text').value,
                        date: new Date().toISOString().split('T')[0]
                    };
                    
                    // Save message
                    const messages = JSON.parse(localStorage.getItem('serenitySpaMessages'));
                    messages.push(message);
                    localStorage.setItem('serenitySpaMessages', JSON.stringify(messages));
                    
                    // Show success message
                    const contactMessage = document.getElementById('contact-message');
                    contactMessage.innerHTML = `<div class="alert alert-success">Message sent successfully! We'll respond within 24 hours.</div>`;
                    
                    // Clear form
                    contactForm.reset();
                    
                    // Update admin panel if open
                    if (document.getElementById('admin-panel') && !document.getElementById('admin-panel').classList.contains('hidden')) {
                        loadAdminMessages();
                    }
                });
            }

            // Admin login form
            const loginForm = document.getElementById('login-form');
            if (loginForm) {
                loginForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    const email = document.getElementById('admin-email').value;
                    const password = document.getElementById('admin-password').value;
                    
                    // Check credentials (hardcoded as per requirements)
                    if (email === 'jay@admin.com' && password === '6376019471') {
                        // Store auth token (simulated)
                        localStorage.setItem('serenitySpaAdminAuth', 'true');
                        showAdminPanel();
                    } else {
                        const loginMessage = document.getElementById('login-message');
                        loginMessage.innerHTML = `<div class="alert alert-error">Invalid credentials. Please try again.</div>`;
                    }
                });
            }

            // Logout button
            const logoutBtn = document.getElementById('logout-btn');
            if (logoutBtn) {
                logoutBtn.addEventListener('click', function() {
                    localStorage.removeItem('serenitySpaAdminAuth');
                    showMainWebsite();
                });
            }

            // Lightbox close
            const lightboxClose = document.getElementById('lightbox-close');
            if (lightboxClose) {
                lightboxClose.addEventListener('click', closeLightbox);
            }

            // Add service button in admin panel
            const addServiceBtn = document.getElementById('add-service-btn');
            if (addServiceBtn) {
                addServiceBtn.addEventListener('click', function() {
                    const serviceName = prompt('Enter service name:');
                    if (!serviceName) return;
                    
                    const duration = prompt('Enter duration (e.g., 60 mins):');
                    if (!duration) return;
                    
                    const price = prompt('Enter price:');
                    if (!price) return;
                    
                    const description = prompt('Enter description:');
                    if (!description) return;
                    
                    const services = JSON.parse(localStorage.getItem('serenitySpaServices'));
                    const newService = {
                        id: Date.now(),
                        name: serviceName,
                        duration: duration,
                        price: parseFloat(price),
                        description: description
                    };
                    
                    services.push(newService);
                    localStorage.setItem('serenitySpaServices', JSON.stringify(services));
                    
                    // Reload services in admin panel
                    loadAdminServices();
                    
                    // Update main website
                    loadServices();
                    updateBookingFormServices();
                });
            }

            // Header scroll effect
            window.addEventListener('scroll', function() {
                const header = document.querySelector('header');
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });

            // Set min date for booking to today
            const dateInput = document.getElementById('date');
            if (dateInput) {
                const today = new Date().toISOString().split('T')[0];
                dateInput.min = today;
            }
        }

        // Show admin login
        function showAdminLogin() {
            document.getElementById('main-website').classList.add('hidden');
            document.getElementById('admin-panel').classList.add('hidden');
            document.getElementById('admin-login').classList.remove('hidden');
            
            // Clear login form
            const loginForm = document.getElementById('login-form');
            if (loginForm) loginForm.reset();
            
            const loginMessage = document.getElementById('login-message');
            if (loginMessage) loginMessage.innerHTML = '';
        }

        // Show admin panel
        function showAdminPanel() {
            document.getElementById('main-website').classList.add('hidden');
            document.getElementById('admin-login').classList.add('hidden');
            document.getElementById('admin-panel').classList.remove('hidden');
            
            // Load admin data
            loadAdminBookings();
            loadAdminMessages();
            loadAdminServices();
        }

        // Show main website
        function showMainWebsite() {
            document.getElementById('admin-login').classList.add('hidden');
            document.getElementById('admin-panel').classList.add('hidden');
            document.getElementById('main-website').classList.remove('hidden');
        }

        // Check auth status
        function checkAuthStatus() {
            const isAuthenticated = localStorage.getItem('serenitySpaAdminAuth') === 'true';
            if (isAuthenticated && window.location.hash === '#admin-panel') {
                showAdminPanel();
            }
        }

        // Load bookings in admin panel
        function loadAdminBookings() {
            const bookings = JSON.parse(localStorage.getItem('serenitySpaBookings'));
            const tableBody = document.getElementById('bookings-table-body');
            
            if (!tableBody) return;
            
            tableBody.innerHTML = '';
            
            bookings.forEach(booking => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${booking.id}</td>
                    <td>${booking.name}</td>
                    <td>${booking.service}</td>
                    <td>${booking.date} at ${booking.time}</td>
                    <td><span class="status-badge status-${booking.status}">${booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}</span></td>
                    <td>
                        <button onclick="updateBookingStatus(${booking.id}, 'confirmed')" class="btn" style="padding: 5px 10px; font-size: 0.9rem; margin-right: 5px; background-color: #d4edda; color: #155724;">Confirm</button>
                        <button onclick="updateBookingStatus(${booking.id}, 'completed')" class="btn" style="padding: 5px 10px; font-size: 0.9rem; margin-right: 5px; background-color: #cce5ff; color: #004085;">Complete</button>
                        <button onclick="deleteBooking(${booking.id})" class="btn" style="padding: 5px 10px; font-size: 0.9rem; background-color: #f8d7da; color: #721c24;">Delete</button>
                    </td>
                `;
                tableBody.appendChild(row);
            });
        }

        // Load messages in admin panel
        function loadAdminMessages() {
            const messages = JSON.parse(localStorage.getItem('serenitySpaMessages'));
            const tableBody = document.getElementById('messages-table-body');
            
            if (!tableBody) return;
            
            tableBody.innerHTML = '';
            
            messages.forEach(message => {
                const row = document.createElement('tr');
                const shortMessage = message.message.length > 50 ? message.message.substring(0, 50) + '...' : message.message;
                row.innerHTML = `
                    <td>${message.id}</td>
                    <td>${message.name}</td>
                    <td>${message.email}</td>
                    <td>${shortMessage}</td>
                    <td>${message.date}</td>
                    <td>
                        <button onclick="viewMessage(${message.id})" class="btn" style="padding: 5px 10px; font-size: 0.9rem; margin-right: 5px;">View</button>
                        <button onclick="deleteMessage(${message.id})" class="btn" style="padding: 5px 10px; font-size: 0.9rem; background-color: #f8d7da; color: #721c24;">Delete</button>
                    </td>
                `;
                tableBody.appendChild(row);
            });
        }

        // Load services in admin panel
        function loadAdminServices() {
            const services = JSON.parse(localStorage.getItem('serenitySpaServices'));
            const tableBody = document.getElementById('services-table-body');
            
            if (!tableBody) return;
            
            tableBody.innerHTML = '';
            
            services.forEach(service => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${service.id}</td>
                    <td>${service.name}</td>
                    <td>${service.duration}</td>
                    <td>$${service.price}</td>
                    <td>
                        <button onclick="editService(${service.id})" class="btn" style="padding: 5px 10px; font-size: 0.9rem; margin-right: 5px;">Edit</button>
                        <button onclick="deleteService(${service.id})" class="btn" style="padding: 5px 10px; font-size: 0.9rem; background-color: #f8d7da; color: #721c24;">Delete</button>
                    </td>
                `;
                tableBody.appendChild(row);
            });
        }

        // Update booking status
        window.updateBookingStatus = function(id, status) {
            const bookings = JSON.parse(localStorage.getItem('serenitySpaBookings'));
            const bookingIndex = bookings.findIndex(b => b.id === id);
            
            if (bookingIndex !== -1) {
                bookings[bookingIndex].status = status;
                localStorage.setItem('serenitySpaBookings', JSON.stringify(bookings));
                loadAdminBookings();
            }
        };

        // Delete booking
        window.deleteBooking = function(id) {
            if (confirm('Are you sure you want to delete this booking?')) {
                const bookings = JSON.parse(localStorage.getItem('serenitySpaBookings'));
                const filteredBookings = bookings.filter(b => b.id !== id);
                localStorage.setItem('serenitySpaBookings', JSON.stringify(filteredBookings));
                loadAdminBookings();
            }
        };

        // View message
        window.viewMessage = function(id) {
            const messages = JSON.parse(localStorage.getItem('serenitySpaMessages'));
            const message = messages.find(m => m.id === id);
            
            if (message) {
                alert(`Message from ${message.name} (${message.email}):\n\n${message.message}`);
            }
        };

        // Delete message
        window.deleteMessage = function(id) {
            if (confirm('Are you sure you want to delete this message?')) {
                const messages = JSON.parse(localStorage.getItem('serenitySpaMessages'));
                const filteredMessages = messages.filter(m => m.id !== id);
                localStorage.setItem('serenitySpaMessages', JSON.stringify(filteredMessages));
                loadAdminMessages();
            }
        };

        // Edit service
        window.editService = function(id) {
            const services = JSON.parse(localStorage.getItem('serenitySpaServices'));
            const service = services.find(s => s.id === id);
            
            if (service) {
                const newName = prompt('Edit service name:', service.name);
                if (newName === null) return;
                
                const newDuration = prompt('Edit duration:', service.duration);
                if (newDuration === null) return;
                
                const newPrice = prompt('Edit price:', service.price);
                if (newPrice === null) return;
                
                const newDescription = prompt('Edit description:', service.description);
                if (newDescription === null) return;
                
                service.name = newName;
                service.duration = newDuration;
                service.price = parseFloat(newPrice);
                service.description = newDescription;
                
                localStorage.setItem('serenitySpaServices', JSON.stringify(services));
                loadAdminServices();
                loadServices();
                updateBookingFormServices();
            }
        };

        // Delete service
        window.deleteService = function(id) {
            if (confirm('Are you sure you want to delete this service?')) {
                const services = JSON.parse(localStorage.getItem('serenitySpaServices'));
                const filteredServices = services.filter(s => s.id !== id);
                localStorage.setItem('serenitySpaServices', JSON.stringify(filteredServices));
                loadAdminServices();
                loadServices();
                updateBookingFormServices();
            }
        };

        // Lightbox functions
        function openLightbox(imageUrl) {
            const lightbox = document.getElementById('lightbox');
            const lightboxImg = document.getElementById('lightbox-img');
            
            lightboxImg.src = imageUrl;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeLightbox() {
            const lightbox = document.getElementById('lightbox');
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        // Close lightbox when clicking outside image
        document.getElementById('lightbox').addEventListener('click', function(e) {
            if (e.target === this) {
                closeLightbox();
            }
        });

        // Handle hash changes for SPA navigation
        window.addEventListener('hashchange', function() {
            if (window.location.hash === '#admin-login') {
                showAdminLogin();
            } else if (window.location.hash === '#admin-panel') {
                if (localStorage.getItem('serenitySpaAdminAuth') === 'true') {
                    showAdminPanel();
                } else {
                    showAdminLogin();
                }
            }
        });