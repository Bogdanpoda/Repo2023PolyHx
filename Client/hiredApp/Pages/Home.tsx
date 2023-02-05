import TinderCard from "react-tinder-card";
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";
import { useState, useEffect } from "react";
import NavBar from "../Components/NavBar";
//import  getJobBatch from "../Api/SwipeApi"

const db = [
  {
    id: 1,
    name: "Drw",
    img: require("../Components/Images/drw.jpg"),
  },
  {
    id: 2,
    name: "Morgan Stanley",
    img: require("../Components/Images/morganStanley.jpg"),
  },
];

const jobsdescription = [
  {
    id: 1,
    field: "software",
    location: "montreal",
    salary: 57000,
    description: "this a software position",
    title: "cloud developer",
  },
  {
    id: 2,
    field: "finance",
    location: "montreal",
    salary: 77000,
    description: "this a finance position",
    title: "analist in IT",
  },
];
export default function HomePage() {
  const characters = db;

  const desc = jobsdescription;
  const [lastDirection, setLastDirection] = useState();
  const [data, setData] = useState(null);

  const [index, setIndex] = useState(0);
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [field, setField] = useState("");
  const [salary, setSalary] = useState(0);
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      for (var i = 0; i < 20; i++) {
        try {
          const response = await fetch(
            "http://10.0.2.2:5000/job_batch/?filter=software"
          );
          const json = await response.json();
          setData(json.results);
          break;
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchData();
  }, []);

  if (data && characters.length < 5) {
    let ind = 0;

    for (var i = 0; i < data.length; i++) {
      characters.push({
        id: 3 + ind,
        name: data[i].company,
        img: require("../Components/Images/morganStanley.jpg"),
      });
      desc.push({
        id: 3 + ind,
        field: data[i].field,
        location: data[i].location,
        salary: data[i].salary,
        description: data[i].description,
        title: data[i].title,
      });
      ind += 1;
    }

    
    setField(desc[desc.length - 1].field);
    setTitle(desc[desc.length - 1].title);
  }

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
    characters.pop();
    desc.pop();
    setIndex(desc.length - 1);
    console.log(desc.length);
    console.log(index);
    setField(desc[desc.length - 1].field);
    setTitle(desc[desc.length - 1].title);
    setLocation(desc[desc.length - 1].location);
    setSalary(desc[desc.length - 1].salary);
    setDescription(desc[desc.length - 1].description);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}>HIRED OR FIRED</Text>
        <View style={styles.cardContainer}>
          {characters.map((character) => (
            <TinderCard
              key={character.id}
              onSwipe={(dir) => swiped(dir, character.name)}
              onCardLeftScreen={() => outOfFrame(character.name)}
            >
              <View style={styles.card}>
                <ImageBackground
                  style={styles.cardImage}
                  source={character.img}
                >
                  <Text style={styles.cardTitle}>{character.name}</Text>
                </ImageBackground>
              </View>
            </TinderCard>
          ))}
        </View>
        <Text> About Us: </Text>
        {lastDirection ? (
          <View>
            <Text style={styles.infoText}>You swiped {lastDirection}</Text>
            <View style={styles.containerDesc}>
              <Text style={styles.headerDesc}>Job Characteristics</Text>

              <View style={styles.itemContainer}>
                <Text style={styles.label}>Job Field:</Text>
                <Text style={styles.value}>{field}</Text>
              </View>

              <View style={styles.itemContainer}>
                <Text style={styles.label}>Location:</Text>
                <Text style={styles.value}>{location}</Text>
              </View>

              <View style={styles.itemContainer}>
                <Text style={styles.label}>Salary:</Text>
                <Text style={styles.value}>{salary}</Text>
              </View>

              <View style={styles.itemContainer}>
                <Text style={styles.label}>Description:</Text>
                <Text style={styles.value}>{description}</Text>
              </View>
            </View>
          </View>
        ) : (
          <Text style={styles.infoText} />
        )}

        <Text> </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  header: {
    marginTop: 60,
    color: "#000",
    fontSize: 30,
    marginBottom: 30,
  },
  cardContainer: {
    width: "90%",
    maxWidth: 260,
    height: 300,
  },
  card: {
    position: "absolute",
    backgroundColor: "#fff",
    width: "100%",
    maxWidth: 260,
    height: 300,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowRadius: 20,
    borderRadius: 20,
    resizeMode: "cover",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    borderRadius: 20,
  },
  cardTitle: {
    position: "absolute",
    bottom: 0,
    margin: 10,
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  infoText: {
    height: 28,
    justifyContent: "center",
    display: "flex",
    zIndex: -100,
  },
  containerDesc: {
    padding: 20,
    backgroundColor: "#F2F2F2",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  headerDesc: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  itemContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    fontWeight: "bold",
    width: "40%",
  },
  value: {
    width: "60%",
  },
});
