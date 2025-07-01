// Simple Database Query Test
// This script helps you check what data is already in your database

const checkExistingData = async () => {
  console.log('🔍 Checking existing data in your Supabase database...\n');

  try {
    // Check contact submissions
    console.log('📧 Fetching contact submissions...');
    const contactResponse = await fetch('/api/contact');
    if (contactResponse.ok) {
      const contacts = await contactResponse.json();
      console.log(`✅ Found ${contacts.length} contact submissions:`);
      contacts.forEach((contact, index) => {
        console.log(`   ${index + 1}. ${contact.name} (${contact.email}) - ${new Date(contact.created_at).toLocaleString()}`);
        console.log(`      Subject: ${contact.subject || 'No subject'}`);
        console.log(`      Message: ${contact.message.substring(0, 50)}...`);
        console.log(`      Status: ${contact.status}\n`);
      });
    } else {
      console.log('❌ Could not fetch contact submissions');
    }

    // Check newsletter subscribers
    console.log('📰 Fetching newsletter subscribers...');
    const newsletterResponse = await fetch('/api/newsletter');
    if (newsletterResponse.ok) {
      const subscribers = await newsletterResponse.json();
      console.log(`✅ Found ${subscribers.length} newsletter subscribers:`);
      subscribers.forEach((subscriber, index) => {
        console.log(`   ${index + 1}. ${subscriber.name || 'No name'} (${subscriber.email}) - ${new Date(subscriber.subscribed_at).toLocaleString()}`);
        console.log(`      Active: ${subscriber.is_active}\n`);
      });
    } else {
      console.log('❌ Could not fetch newsletter subscribers');
    }

    // Check product inquiries
    console.log('🛍️ Fetching product inquiries...');
    const productResponse = await fetch('/api/products');
    if (productResponse.ok) {
      const inquiries = await productResponse.json();
      console.log(`✅ Found ${inquiries.length} product inquiries:`);
      inquiries.forEach((inquiry, index) => {
        console.log(`   ${index + 1}. ${inquiry.name} (${inquiry.email}) - ${new Date(inquiry.created_at).toLocaleString()}`);
        console.log(`      Product: ${inquiry.product_name}`);
        console.log(`      Quantity: ${inquiry.quantity || 'Not specified'}`);
        console.log(`      Status: ${inquiry.status}\n`);
      });
    } else {
      console.log('❌ Could not fetch product inquiries');
    }

  } catch (error) {
    console.error('❌ Error checking data:', error);
  }
};

// Run the check
checkExistingData();
