const initialData = [
  {
    flightNumber: "FL001",
    airline: "Delta Airlines",
    departureCity: "New York",
    arrivalCity: "Los Angeles",
    departureTime: "2024-06-01T10:00:00Z",
    arrivalTime: "2024-06-01T13:00:00Z",
    seatsAvailable: 60
  },
  {
    flightNumber: "FL002",
    airline: "American Airlines",
    departureCity: "Los Angeles",
    arrivalCity: "Chicago",
    departureTime: "2024-06-02T11:00:00Z",
    arrivalTime: "2024-06-02T13:30:00Z",
    seatsAvailable: 50
  },
  {
    flightNumber: "FL003",
    airline: "United Airlines",
    departureCity: "Chicago",
    arrivalCity: "Miami",
    departureTime: "2024-06-03T14:00:00Z",
    arrivalTime: "2024-06-03T17:00:00Z",
    seatsAvailable: 40
  },
  {
    flightNumber: "FL004",
    airline: "Southwest Airlines",
    departureCity: "Miami",
    arrivalCity: "Denver",
    departureTime: "2024-06-04T18:00:00Z",
    arrivalTime: "2024-06-04T21:00:00Z",
    seatsAvailable: 55
  },
  {
    flightNumber: "FL005",
    airline: "JetBlue Airways",
    departureCity: "Denver",
    arrivalCity: "Seattle",
    departureTime: "2024-06-05T08:00:00Z",
    arrivalTime: "2024-06-05T10:30:00Z",
    seatsAvailable: 30
  },
  {
    flightNumber: "FL006",
    airline: "Alaska Airlines",
    departureCity: "Seattle",
    arrivalCity: "San Francisco",
    departureTime: "2024-06-06T12:00:00Z",
    arrivalTime: "2024-06-06T14:00:00Z",
    seatsAvailable: 45
  },
  {
    flightNumber: "FL007",
    airline: "Spirit Airlines",
    departureCity: "San Francisco",
    arrivalCity: "Las Vegas",
    departureTime: "2024-06-07T15:00:00Z",
    arrivalTime: "2024-06-07T16:30:00Z",
    seatsAvailable: 20
  },
  {
    flightNumber: "FL008",
    airline: "Frontier Airlines",
    departureCity: "Las Vegas",
    arrivalCity: "Phoenix",
    departureTime: "2024-06-08T17:00:00Z",
    arrivalTime: "2024-06-08T18:30:00Z",
    seatsAvailable: 25
  },
  {
    flightNumber: "FL009",
    airline: "Hawaiian Airlines",
    departureCity: "Phoenix",
    arrivalCity: "Honolulu",
    departureTime: "2024-06-09T19:00:00Z",
    arrivalTime: "2024-06-09T22:00:00Z",
    seatsAvailable: 50
  },
  {
    flightNumber: "FL010",
    airline: "Allegiant Air",
    departureCity: "Honolulu",
    arrivalCity: "Maui",
    departureTime: "2024-06-10T09:00:00Z",
    arrivalTime: "2024-06-10T10:00:00Z",
    seatsAvailable: 55
  },
  {
    flightNumber: "FL011",
    airline: "Delta Airlines",
    departureCity: "Boston",
    arrivalCity: "Atlanta",
    departureTime: "2024-06-11T11:00:00Z",
    arrivalTime: "2024-06-11T14:00:00Z",
    seatsAvailable: 40
  },
  {
    flightNumber: "FL012",
    airline: "American Airlines",
    departureCity: "Dallas",
    arrivalCity: "Houston",
    departureTime: "2024-06-12T12:00:00Z",
    arrivalTime: "2024-06-12T13:30:00Z",
    seatsAvailable: 60
  },
  {
    flightNumber: "FL013",
    airline: "United Airlines",
    departureCity: "Philadelphia",
    arrivalCity: "San Diego",
    departureTime: "2024-06-13T13:00:00Z",
    arrivalTime: "2024-06-13T16:00:00Z",
    seatsAvailable: 35
  },
  {
    flightNumber: "FL014",
    airline: "Southwest Airlines",
    departureCity: "Orlando",
    arrivalCity: "Charlotte",
    departureTime: "2024-06-14T14:00:00Z",
    arrivalTime: "2024-06-14T15:30:00Z",
    seatsAvailable: 50
  },
  {
    flightNumber: "FL015",
    airline: "JetBlue Airways",
    departureCity: "San Antonio",
    arrivalCity: "Austin",
    departureTime: "2024-06-15T15:00:00Z",
    arrivalTime: "2024-06-15T15:45:00Z",
    seatsAvailable: 20
  },
  {
    flightNumber: "FL016",
    airline: "Alaska Airlines",
    departureCity: "San Jose",
    arrivalCity: "Sacramento",
    departureTime: "2024-06-16T16:00:00Z",
    arrivalTime: "2024-06-16T16:45:00Z",
    seatsAvailable: 25
  },
  {
    flightNumber: "FL017",
    airline: "Spirit Airlines",
    departureCity: "Columbus",
    arrivalCity: "Indianapolis",
    departureTime: "2024-06-17T17:00:00Z",
    arrivalTime: "2024-06-17T18:00:00Z",
    seatsAvailable: 30
  },
  {
    flightNumber: "FL018",
    airline: "Frontier Airlines",
    departureCity: "Fort Worth",
    arrivalCity: "El Paso",
    departureTime: "2024-06-18T18:00:00Z",
    arrivalTime: "2024-06-18T19:30:00Z",
    seatsAvailable: 55
  },
  {
    flightNumber: "FL019",
    airline: "Hawaiian Airlines",
    departureCity: "Detroit",
    arrivalCity: "Nashville",
    departureTime: "2024-06-19T19:00:00Z",
    arrivalTime: "2024-06-19T20:30:00Z",
    seatsAvailable: 60
  },
  {
    flightNumber: "FL020",
    airline: "Allegiant Air",
    departureCity: "Memphis",
    arrivalCity: "New Orleans",
    departureTime: "2024-06-20T20:00:00Z",
    arrivalTime: "2024-06-20T21:30:00Z",
    seatsAvailable: 45
  },
  {
    flightNumber: "FL021",
    airline: "Delta Airlines",
    departureCity: "Kansas City",
    arrivalCity: "Louisville",
    departureTime: "2024-06-21T21:00:00Z",
    arrivalTime: "2024-06-21T22:30:00Z",
    seatsAvailable: 30
  },
  {
    flightNumber: "FL022",
    airline: "American Airlines",
    departureCity: "Milwaukee",
    arrivalCity: "Tampa",
    departureTime: "2024-06-22T22:00:00Z",
    arrivalTime: "2024-06-23T01:00:00Z",
    seatsAvailable: 50
  },
  {
    flightNumber: "FL023",
    airline: "United Airlines",
    departureCity: "Baltimore",
    arrivalCity: "Cleveland",
    departureTime: "2024-06-23T23:00:00Z",
    arrivalTime: "2024-06-24T00:30:00Z",
    seatsAvailable: 35
  },
  {
    flightNumber: "FL024",
    airline: "Southwest Airlines",
    departureCity: "Portland",
    arrivalCity: "Raleigh",
    departureTime: "2024-06-24T06:00:00Z",
    arrivalTime: "2024-06-24T09:00:00Z",
    seatsAvailable: 45
  },
  {
    flightNumber: "FL025",
    airline: "JetBlue Airways",
    departureCity: "St. Louis",
    arrivalCity: "Minneapolis",
    departureTime: "2024-06-25T07:00:00Z",
    arrivalTime: "2024-06-25T08:30:00Z",
    seatsAvailable: 40
  },
  {
    flightNumber: "FL026",
    airline: "Alaska Airlines",
    departureCity: "Omaha",
    arrivalCity: "Tucson",
    departureTime: "2024-06-26T08:00:00Z",
    arrivalTime: "2024-06-26T09:30:00Z",
    seatsAvailable: 35
  },
  {
    flightNumber: "FL027",
    airline: "Spirit Airlines",
    departureCity: "Long Beach",
    arrivalCity: "Oakland",
    departureTime: "2024-06-27T09:00:00Z",
    arrivalTime: "2024-06-27T10:00:00Z",
    seatsAvailable: 25
  },
  {
    flightNumber: "FL028",
    airline: "Frontier Airlines",
    departureCity: "Anaheim",
    arrivalCity: "Bakersfield",
    departureTime: "2024-06-28T10:00:00Z",
    arrivalTime: "2024-06-28T11:00:00Z",
    seatsAvailable: 50
  },
  {
    flightNumber: "FL029",
    airline: "Hawaiian Airlines",
    departureCity: "Santa Ana",
    arrivalCity: "Stockton",
    departureTime: "2024-06-29T11:00:00Z",
    arrivalTime: "2024-06-29T12:30:00Z",
    seatsAvailable: 40
  },
  {
    flightNumber: "FL030",
    airline: "Allegiant Air",
    departureCity: "Modesto",
    arrivalCity: "Fresno",
    departureTime: "2024-06-30T12:00:00Z",
    arrivalTime: "2024-06-30T13:00:00Z",
    seatsAvailable: 30
  }
]

module.exports = initialData
