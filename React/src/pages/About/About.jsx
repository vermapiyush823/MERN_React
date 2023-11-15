const About = () => {
  const apiResponse = {
    results: [
      {
        gender: "female",
        name: { title: "Miss", first: "Lydia", last: "Wilson" },
        location: {
          street: { number: 4921, name: "Hillcrest Rd" },
          city: "Shiloh",
          state: "Virginia",
          country: "United States",
          postcode: 30457,
          coordinates: { latitude: "85.8766", longitude: "34.5275" },
          timezone: { offset: "+9:30", description: "Adelaide, Darwin" },
        },
        email: "lydia.wilson@example.com",
        login: {
          uuid: "9f0e75de-317f-4a77-b093-75b9081ce460",
          username: "brownkoala388",
          password: "monitor",
          salt: "fC7QCBTb",
          md5: "720596a69bd3ce18176ec0400726c582",
          sha1: "fb01e416378fce997b981826942c327a120d214c",
          sha256:
            "4dc4dd41358031a82ef795b6eb5252c9490bdffe65d9c6673cc9990e68a66e0e",
        },
        dob: { date: "1984-11-06T06:46:16.317Z", age: 39 },
        registered: { date: "2014-10-22T12:49:39.812Z", age: 9 },
        phone: "(617) 933-0186",
        cell: "(463) 636-8984",
        id: { name: "SSN", value: "648-76-0163" },
        picture: {
          large: "https://randomuser.me/api/portraits/women/2.jpg",
          medium: "https://randomuser.me/api/portraits/med/women/2.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/women/2.jpg",
        },
        nat: "US",
      },
    ],
    info: { seed: "223906dde78c0be9", results: 1, page: 1, version: "1.4" },
  };
  return (
    <div>
      <img src={apiResponse.results[0].picture.large} alt="" srcset="" />
      <p>
        {apiResponse.results[0].name.title +
          " " +
          apiResponse.results[0].name.first +
          " " +
          apiResponse.results[0].name.last}
      </p>
    </div>
  );
};

export default About;
