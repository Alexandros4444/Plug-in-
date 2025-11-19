export default function handler(req, res) {
  res.status(200).json({
    name: "Leros Maasmechelen",
    address: "Rijksweg 435, 3630 Maasmechelen, België",
    phone: "+32 89 76 11 33",
    type: "Grieks restaurant",
    services: ["Dine-in", "Takeaway"],
    opening_hours: {
      monday: "Gesloten",
      tuesday: "11:30-22:00",
      wednesday: "11:30-22:00",
      thursday: "11:30-22:00",
      friday: "11:30-23:00",
      saturday: "11:30-23:00",
      sunday: "11:30-22:00"
    }
  });
}
