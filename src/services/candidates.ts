import candidate from "../models/candidate";

export const initDatabase = async () => {
    try {
        const cands = [
            {
              name: "John",
              image: "https://randomuser.me/api/portraits/med/men/81.jpg",
            },
            {
              name: "Johnny",
              image: "https://randomuser.me/api/portraits/med/men/13.jpg",
            },
            {
              name: "Johnnyiahoo",
              image: "https://randomuser.me/api/portraits/med/men/83.jpg",
            },
            {
              name: "Johnniel",
              image: "https://randomuser.me/api/portraits/med/men/0.jpg",
            },
            {
              name: "Johnny",
              image: "https://randomuser.me/api/portraits/med/men/6.jpg",
            },
          ];
          for (const cand of cands) {
            const newCand = new candidate(cand)
            await newCand.save()
          }
    } catch (err) {
        console.log(err)
    }
}