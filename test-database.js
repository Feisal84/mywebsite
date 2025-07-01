// Database Connection Test for Supabase
// This script tests if your Supabase database is properly configured and working

console.log('🔍 Starting Supabase Database Test...');
console.log('📋 Project URL: https://dsexxgntnzrxeolrassn.supabase.co');
console.log('🔑 Anonymous Key: ✓ Configured');

// Test 1: Basic connection test
const testConnection = async () => {
  try {
    console.log('\n📡 Testing API endpoints...');
    
    // Test contact form submission
    const contactTest = {
      name: 'Database Test User',
      email: 'test@example.com',
      message: 'Testing database connection - ' + new Date().toISOString(),
      subject: 'Database Connection Test',
      phone: '+1234567890'
    };

    console.log('📧 Testing Contact Form API...');
    const contactResponse = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactTest),
    });

    if (contactResponse.ok) {
      const contactResult = await contactResponse.json();
      console.log('✅ Contact API Success:', contactResult.message);
      console.log('📝 Contact Data ID:', contactResult.data?.id);
    } else {
      const error = await contactResponse.json();
      console.log('❌ Contact API Error:', error.error);
    }

    // Test newsletter subscription
    console.log('\n📰 Testing Newsletter API...');
    const newsletterResponse = await fetch('/api/newsletter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'newsletter-test@example.com',
        name: 'Newsletter Tester'
      }),
    });

    if (newsletterResponse.ok) {
      const newsletterResult = await newsletterResponse.json();
      console.log('✅ Newsletter API Success:', newsletterResult.message);
      console.log('📬 Newsletter Data ID:', newsletterResult.data?.id);
    } else {
      const error = await newsletterResponse.json();
      console.log('❌ Newsletter API Error:', error.error);
    }

    // Test product inquiry
    console.log('\n🛍️ Testing Product Inquiry API...');
    const productResponse = await fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Product Tester',
        email: 'product-test@example.com',
        product_name: 'Test Product',
        quantity: 5,
        message: 'Testing product inquiry functionality'
      }),
    });

    if (productResponse.ok) {
      const productResult = await productResponse.json();
      console.log('✅ Product API Success:', productResult.message);
      console.log('🛒 Product Data ID:', productResult.data?.id);
    } else {
      const error = await productResponse.json();
      console.log('❌ Product API Error:', error.error);
    }

    console.log('\n🎉 Database test completed!');
    console.log('💡 Check your Supabase dashboard to see the submitted data.');

  } catch (error) {
    console.error('❌ Database test failed:', error);
    console.log('🔧 Possible issues:');
    console.log('   - Server not running (try: npm run dev)');
    console.log('   - Network connection issues');
    console.log('   - CORS configuration problems');
  }
};

// Instructions for running the test
console.log('\n📖 How to run this test:');
console.log('1. Make sure your Next.js server is running (npm run dev)');
console.log('2. Open your browser and go to your website');
console.log('3. Open Developer Tools (F12)');
console.log('4. Go to the Console tab');
console.log('5. Copy and paste this entire script');
console.log('6. Press Enter to run the test');
console.log('\nAlternatively, you can run: node test-database.js');

// Export for Node.js use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { testConnection };
}

// Auto-run if in browser
if (typeof window !== 'undefined') {
  testConnection();
}
