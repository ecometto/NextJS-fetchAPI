import Layout from "../components/layout";

export default function index() {
  return (
    <Layout>
      <div className="container text-center">
        <p> On the top of this page, you will find a nav bar with links what will redirect you to a list of "users" and "posts". </p>
        <p> The data into this lists where collected from "JsonPlaceHolder FAKE FREE API"</p>
        <p>Users data was server side renderized, while Posts data was Client side renderized, in order to practice both ways to renderice information obtained (had got?) from APIs</p>
      </div>
    </Layout>
  )
}