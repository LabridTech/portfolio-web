'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { jsPDF } from 'jspdf';

export default function DiscoveryForm() {
  const [formData, setFormData] = useState({
    // Company Discovery
    industry: '',
    products: '',
    employeeCount: '',
    locations: '',
    techDecisionMaker: '',
    currentSoftware: '',
    challenges: '',
    automationNeeds: '',
    performanceTracking: '',
    inventoryManagement: '',
    budget: '',
    timeline: '',
    goals: '',
    competitors: '',
    marketPosition: '',
    
    // Technical Questions
    currentTechStack: '',
    integrationNeeds: '',
    dataSecurityRequirements: '',
    scalabilityNeeds: '',
    mobileRequirements: '',

    // Interest & Timing
    recentSolutions: '',
    improvementAreas: '',
    demoInterest: '',
    reconnectTime: '',
    solutionIdea: '',
    decisionTimeline: '',
    stakeholders: '',

    // Contact Details
    name: '',
    position: '',
    phone: '',
    email: '',
    website: '',
    contactMethod: '',
    companySize: '',
    location: ''
  });

  const generatePDF = () => {
    const doc = new jsPDF();
    let yPos = 20;
    const lineHeight = 10;
    const margin = 20;
    const pageWidth = doc.internal.pageSize.width;

    // Add title
    doc.setFontSize(16);
    doc.text('Company Discovery Form', margin, yPos);
    yPos += lineHeight * 2;

    // Helper function to add sections
    const addSection = (title: string, data: Record<string, string>) => {
      doc.setFontSize(14);
      doc.text(title, margin, yPos);
      yPos += lineHeight;
      
      doc.setFontSize(12);
      Object.entries(data).forEach(([key, value]) => {
        // Check if we need a new page
        if (yPos > 270) {
          doc.addPage();
          yPos = 20;
        }
        
        const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
        const text = `${formattedKey}: ${value}`;
        doc.text(text, margin, yPos, { maxWidth: pageWidth - (margin * 2) });
        yPos += lineHeight;
      });
      yPos += lineHeight;
    };

    // Add sections
    addSection('Company Discovery', {
      industry: formData.industry,
      products: formData.products,
      employeeCount: formData.employeeCount,
      locations: formData.locations,
      techDecisionMaker: formData.techDecisionMaker,
      currentSoftware: formData.currentSoftware,
      challenges: formData.challenges,
      automationNeeds: formData.automationNeeds,
      performanceTracking: formData.performanceTracking,
      inventoryManagement: formData.inventoryManagement
    });

    addSection('Technical Information', {
      currentTechStack: formData.currentTechStack,
      integrationNeeds: formData.integrationNeeds,
      dataSecurityRequirements: formData.dataSecurityRequirements,
      scalabilityNeeds: formData.scalabilityNeeds,
      mobileRequirements: formData.mobileRequirements
    });

    addSection('Interest & Timing', {
      recentSolutions: formData.recentSolutions,
      improvementAreas: formData.improvementAreas,
      demoInterest: formData.demoInterest,
      decisionTimeline: formData.decisionTimeline,
      stakeholders: formData.stakeholders
    });

    addSection('Contact Information', {
      name: formData.name,
      position: formData.position,
      phone: formData.phone,
      email: formData.email,
      website: formData.website,
      contactMethod: formData.contactMethod,
      companySize: formData.companySize,
      location: formData.location
    });

    // Save the PDF
    doc.save(`discovery-form-${formData.name || 'unnamed'}.pdf`);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    generatePDF();
    // Here you can also implement your data storage logic
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Company Discovery Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Company Discovery Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2">Industry</label>
            <Input
              value={formData.industry}
              onChange={(e) => setFormData({...formData, industry: e.target.value})}
              placeholder="What industry is your company in?"
            />
          </div>
          <div>
            <label className="block mb-2">Products/Services</label>
            <Textarea
              value={formData.products}
              onChange={(e) => setFormData({...formData, products: e.target.value})}
              placeholder="What are your main products or services?"
            />
          </div>
          <div>
            <label className="block mb-2">Employee Count</label>
            <Input
              value={formData.employeeCount}
              onChange={(e) => setFormData({...formData, employeeCount: e.target.value})}
              placeholder="How many employees do you have?"
            />
          </div>
          <div>
            <label className="block mb-2">Locations</label>
            <Input
              value={formData.locations}
              onChange={(e) => setFormData({...formData, locations: e.target.value})}
              placeholder="Do you operate from multiple locations or just one?"
            />
          </div>
          <div>
            <label className="block mb-2">Tech Decision Maker</label>
            <Input
              value={formData.techDecisionMaker}
              onChange={(e) => setFormData({...formData, techDecisionMaker: e.target.value})}
              placeholder="Who handles technology decisions?"
            />
          </div>
          <div>
            <label className="block mb-2">Current Software</label>
            <Textarea
              value={formData.currentSoftware}
              onChange={(e) => setFormData({...formData, currentSoftware: e.target.value})}
              placeholder="Are you currently using any custom software or ERPs?"
            />
          </div>
        </div>
      </section>

      {/* Technical Questions Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Technical Requirements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2">Current Tech Stack</label>
            <Textarea
              value={formData.currentTechStack}
              onChange={(e) => setFormData({...formData, currentTechStack: e.target.value})}
              placeholder="What technologies are you currently using?"
            />
          </div>
          <div>
            <label className="block mb-2">Integration Needs</label>
            <Textarea
              value={formData.integrationNeeds}
              onChange={(e) => setFormData({...formData, integrationNeeds: e.target.value})}
              placeholder="What systems need to be integrated?"
            />
          </div>
          <div>
            <label className="block mb-2">Data Security Requirements</label>
            <Textarea
              value={formData.dataSecurityRequirements}
              onChange={(e) => setFormData({...formData, dataSecurityRequirements: e.target.value})}
              placeholder="What are your data security requirements?"
            />
          </div>
          <div>
            <label className="block mb-2">Scalability Needs</label>
            <Textarea
              value={formData.scalabilityNeeds}
              onChange={(e) => setFormData({...formData, scalabilityNeeds: e.target.value})}
              placeholder="What are your scalability requirements?"
            />
          </div>
        </div>
      </section>

      {/* Interest & Timing Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Interest & Timing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2">Recent Solutions Explored</label>
            <Textarea
              value={formData.recentSolutions}
              onChange={(e) => setFormData({...formData, recentSolutions: e.target.value})}
              placeholder="Have you explored any software solutions recently?"
            />
          </div>
          <div>
            <label className="block mb-2">Areas for Improvement</label>
            <Textarea
              value={formData.improvementAreas}
              onChange={(e) => setFormData({...formData, improvementAreas: e.target.value})}
              placeholder="What areas would you like to improve?"
            />
          </div>
          <div>
            <label className="block mb-2">Demo Interest</label>
            <Input
              value={formData.demoInterest}
              onChange={(e) => setFormData({...formData, demoInterest: e.target.value})}
              placeholder="Would you be interested in a demo?"
            />
          </div>
          <div>
            <label className="block mb-2">Decision Timeline</label>
            <Input
              value={formData.decisionTimeline}
              onChange={(e) => setFormData({...formData, decisionTimeline: e.target.value})}
              placeholder="What's your timeline for making a decision?"
            />
          </div>
        </div>
      </section>

      {/* Contact Details Section - remove required attributes */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Contact Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2">Name</label>
            <Input
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              placeholder="Your full name"
            />
          </div>
          <div>
            <label className="block mb-2">Position/Role</label>
            <Input
              value={formData.position}
              onChange={(e) => setFormData({...formData, position: e.target.value})}
              placeholder="Your position in the company"
            />
          </div>
          <div>
            <label className="block mb-2">Phone</label>
            <Input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              placeholder="Your contact number"
            />
          </div>
          <div>
            <label className="block mb-2">Email</label>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="Your email address"
            />
          </div>
          <div>
            <label className="block mb-2">Company Website</label>
            <Input
              type="url"
              value={formData.website}
              onChange={(e) => setFormData({...formData, website: e.target.value})}
              placeholder="Company website URL"
            />
          </div>
          <div>
            <label className="block mb-2">Preferred Contact Method</label>
            <Input
              value={formData.contactMethod}
              onChange={(e) => setFormData({...formData, contactMethod: e.target.value})}
              placeholder="Email/Call/WhatsApp"
            />
          </div>
        </div>
      </section>

      <div className="flex justify-end space-x-4">
        <Button type="submit" className="px-8">
          Submit and Generate PDF
        </Button>
      </div>
    </form>
  );
}