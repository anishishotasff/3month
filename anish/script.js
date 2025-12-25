// Interactive functionality for the anniversary website

// Function to reveal the hidden love message
function revealMessage() {
    const hiddenMessage = document.getElementById('hiddenMessage');
    const button = document.querySelector('.reveal-btn');
    
    if (hiddenMessage.classList.contains('show')) {
        hiddenMessage.classList.remove('show');
        button.textContent = 'Click to reveal my heart 💖';
    } else {
        hiddenMessage.classList.add('show');
        button.textContent = 'Hide message 💕';
        
        // Add some sparkle effect
        createSparkles();
    }
}

// Create sparkle animation when message is revealed
function createSparkles() {
    const sparkleContainer = document.createElement('div');
    sparkleContainer.style.position = 'fixed';
    sparkleContainer.style.top = '0';
    sparkleContainer.style.left = '0';
    sparkleContainer.style.width = '100%';
    sparkleContainer.style.height = '100%';
    sparkleContainer.style.pointerEvents = 'none';
    sparkleContainer.style.zIndex = '1000';
    
    document.body.appendChild(sparkleContainer);
    
    // Create multiple sparkles
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            createSparkle(sparkleContainer);
        }, i * 100);
    }
    
    // Remove sparkle container after animation
    setTimeout(() => {
        document.body.removeChild(sparkleContainer);
    }, 3000);
}

function createSparkle(container) {
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '✨';
    sparkle.style.position = 'absolute';
    sparkle.style.fontSize = '20px';
    sparkle.style.left = Math.random() * 100 + '%';
    sparkle.style.top = Math.random() * 100 + '%';
    sparkle.style.animation = 'sparkleAnimation 2s ease-out forwards';
    
    container.appendChild(sparkle);
    
    // Remove sparkle after animation
    setTimeout(() => {
        if (container.contains(sparkle)) {
            container.removeChild(sparkle);
        }
    }, 2000);
}

// Add sparkle animation CSS
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparkleAnimation {
        0% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
        }
        50% {
            opacity: 1;
            transform: scale(1) rotate(180deg);
        }
        100% {
            opacity: 0;
            transform: scale(0) rotate(360deg);
        }
    }
`;
document.head.appendChild(sparkleStyle);

// Add scroll animations
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, observerOptions);
    
    // Observe timeline items and message cards
    document.querySelectorAll('.timeline-item, .message-card').forEach(el => {
        observer.observe(el);
    });
}

// Add floating hearts effect
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '💖';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.bottom = '-50px';
    heart.style.fontSize = '20px';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '999';
    heart.style.animation = 'floatUp 8s linear forwards';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        if (document.body.contains(heart)) {
            document.body.removeChild(heart);
        }
    }, 8000);
}

// Add floating hearts animation CSS
const floatingStyle = document.createElement('style');
floatingStyle.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(floatingStyle);

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    addScrollAnimations();
    
    // Create floating hearts periodically
    setInterval(createFloatingHeart, 3000);
    
    // Add click effect to message cards
    document.querySelectorAll('.message-card').forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(1.05)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });
    
    // Add hover effect to timeline markers
    document.querySelectorAll('.timeline-marker').forEach(marker => {
        marker.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(10deg)';
        });
        
        marker.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
});

// Add some romantic quotes that appear randomly
const romanticQuotes = [
    "Every love story is beautiful, but ours is my favorite 💕",
    "You are my today and all of my tomorrows 💖",
    "In a sea of people, my eyes will always search for you 🌟",
    "You make my heart smile 😊",
    "Together is my favorite place to be 💝"
];

function showRandomQuote() {
    const quote = romanticQuotes[Math.floor(Math.random() * romanticQuotes.length)];
    
    const quoteElement = document.createElement('div');
    quoteElement.textContent = quote;
    quoteElement.style.position = 'fixed';
    quoteElement.style.top = '20px';
    quoteElement.style.right = '20px';
    quoteElement.style.background = 'rgba(255, 255, 255, 0.95)';
    quoteElement.style.padding = '15px 20px';
    quoteElement.style.borderRadius = '25px';
    quoteElement.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
    quoteElement.style.fontSize = '14px';
    quoteElement.style.color = '#d63384';
    quoteElement.style.fontWeight = '500';
    quoteElement.style.zIndex = '1001';
    quoteElement.style.animation = 'slideInFromRight 0.5s ease-out';
    quoteElement.style.maxWidth = '250px';
    quoteElement.style.textAlign = 'center';
    
    document.body.appendChild(quoteElement);
    
    setTimeout(() => {
        quoteElement.style.animation = 'slideOutToRight 0.5s ease-out forwards';
        setTimeout(() => {
            if (document.body.contains(quoteElement)) {
                document.body.removeChild(quoteElement);
            }
        }, 500);
    }, 4000);
}

// Add slide animations for quotes
const quoteStyle = document.createElement('style');
quoteStyle.textContent = `
    @keyframes slideInFromRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutToRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(quoteStyle);

// Show random quotes every 15 seconds
setInterval(showRandomQuote, 15000);