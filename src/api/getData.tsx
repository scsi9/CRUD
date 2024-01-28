import axios from "axios";

export async function getData() {
  const answer = await axios.get(
    "https://hacker-news.firebaseio.com/v0/item/121003.json"
  );

  console.log(answer.data.id);
  return answer.data;
}
