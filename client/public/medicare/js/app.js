// MediCare Sync Interactive EHR Engine & Booking Application

document.addEventListener('DOMContentLoaded', () => {
  console.log('MediCare Sync Core Online.');

  // Simulated Database
  let doctors = [
    { id: 1, name: 'Dr. Anisa Rahma, Sp.A', spec: 'Pediatrics', status: 'Available', time: '09:00 - 14:00', room: 'Clinic 2A' },
    { id: 2, name: 'Dr. Budi Pratama, Sp.PD', spec: 'Internal Medicine', status: 'In Consultation', time: '10:00 - 16:00', room: 'Clinic 1B' },
    { id: 3, name: 'Dr. Hendra Wijaya, Sp.JP', spec: 'Cardiology', status: 'Available', time: '13:00 - 18:00', room: 'Clinic 3C' },
    { id: 4, name: 'Dr. Maya Sukaesih, Sp.DVE', spec: 'Dermatology', status: 'On Leave', time: 'Off', room: 'Clinic 4A' }
  ];

  let appointments = [
    { id: 'APT-1092', patient: 'Siti Aminah', doctor: 'Dr. Anisa Rahma', time: '10:30 AM', status: 'Confirmed', type: 'Pediatric Checkup' },
    { id: 'APT-1093', patient: 'Rahmat Hidayat', doctor: 'Dr. Budi Pratama', time: '11:15 AM', status: 'In Session', type: 'Routine Blood Panel' },
    { id: 'APT-1094', patient: 'Dewi Lestari', doctor: 'Dr. Hendra Wijaya', time: '02:00 PM', status: 'Scheduled', type: 'ECG Evaluation' }
  ];

  let patientRecords = [
    { id: 'EHR-8821', name: 'Bambang Triyono', age: 45, gender: 'Male', blood: 'O+', lastVisit: '2026-09-10', diagnosis: 'Mild Hypertension', status: 'Stable' },
    { id: 'EHR-8822', name: 'Clara Shinta', age: 29, gender: 'Female', blood: 'A+', lastVisit: '2026-09-14', diagnosis: 'Acute Pharyngitis', status: 'Recovering' },
    { id: 'EHR-8823', name: 'Dharmawan Putra', age: 62, gender: 'Male', blood: 'B+', lastVisit: '2026-09-17', diagnosis: 'Type 2 Diabetes', status: 'Monitoring' }
  ];

  // Render Doctor Schedule Cards
  const doctorGrid = document.getElementById('doctorGrid');
  if (doctorGrid) {
    renderDoctors();
  }

  function renderDoctors() {
    doctorGrid.innerHTML = doctors.map(doc => `
      <div class="feature-card">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:12px;">
          <div class="feature-icon">🩺</div>
          <span class="badge ${doc.status === 'Available' ? 'badge-emerald' : doc.status === 'In Consultation' ? 'badge-teal' : 'badge-cyan'}">
            ${doc.status}
          </span>
        </div>
        <h3 style="font-size:1.1rem; font-weight:700; color:#fff; margin-bottom:4px;">${doc.name}</h3>
        <p style="font-size:0.85rem; color:#38bdf8; margin-bottom:12px; font-family:var(--font-mono);">${doc.spec} • ${doc.room}</p>
        <p style="font-size:0.8rem; color:#94a3b8; margin-bottom:16px;">Available Hours: ${doc.time}</p>
        <button class="btn btn-primary btn-sm" style="width:100%;" onclick="openBookingModal('${doc.name}')">
          Book Appointment
        </button>
      </div>
    `).join('');
  }

  // Render Patient Table
  const patientTableBody = document.getElementById('patientTableBody');
  if (patientTableBody) {
    renderPatients(patientRecords);
  }

  function renderPatients(records) {
    patientTableBody.innerHTML = records.map(p => `
      <tr>
        <td class="mono" style="color:#2dd4bf; font-weight:600;">${p.id}</td>
        <td style="font-weight:600; color:#fff;">${p.name}</td>
        <td style="color:#94a3b8;">${p.age} yrs / ${p.gender} / <span class="mono">${p.blood}</span></td>
        <td style="color:#e2e8f0;">${p.diagnosis}</td>
        <td class="mono" style="color:#94a3b8;">${p.lastVisit}</td>
        <td><span class="badge badge-teal">${p.status}</span></td>
      </tr>
    `).join('');
  }

  // Search Patient Records
  const searchInput = document.getElementById('patientSearch');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase();
      const filtered = patientRecords.filter(r => 
        r.name.toLowerCase().includes(term) || 
        r.id.toLowerCase().includes(term) || 
        r.diagnosis.toLowerCase().includes(term)
      );
      renderPatients(filtered);
    });
  }

  // Booking Modal Logic
  window.openBookingModal = function(docName) {
    const modal = document.getElementById('bookingModal');
    const docSelect = document.getElementById('modalDoctorName');
    if (docSelect && docName) {
      docSelect.value = docName;
    }
    modal.classList.add('active');
  };

  window.closeBookingModal = function() {
    document.getElementById('bookingModal').classList.remove('active');
  };

  const bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const patientName = document.getElementById('patientName').value;
      const doctorName = document.getElementById('modalDoctorName').value;
      const date = document.getElementById('appointmentDate').value;
      const time = document.getElementById('appointmentTime').value;

      const newApt = {
        id: `APT-${Math.floor(1000 + Math.random() * 9000)}`,
        patient: patientName,
        doctor: doctorName,
        time: `${date} @ ${time}`,
        status: 'Scheduled',
        type: 'General Consultation'
      };

      appointments.unshift(newApt);
      alert(`✅ Appointment Successfully Synchronized with Redis Cache!\n\nID: ${newApt.id}\nPatient: ${patientName}\nDoctor: ${doctorName}\nSlot: ${newApt.time}`);
      
      closeBookingModal();
      bookingForm.reset();
      updateRedisLatencySim();
    });
  }

  // Simulated Redis Latency Measurement
  function updateRedisLatencySim() {
    const latencyEl = document.getElementById('redisLatency');
    if (latencyEl) {
      const randomLatency = (12 + Math.random() * 15).toFixed(1);
      latencyEl.textContent = `${randomLatency} ms`;
    }
  }

  setInterval(updateRedisLatencySim, 4000);
});
