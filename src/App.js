import "./App.css";
import "./Basic-Style.css";
import Image from "./components/Image.js";

function App() {
  return (
    <section className="container">
      <Image
        src={
          "https://images.unsplash.com/photo-1661933021480-75b708d5648f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        }
        idx={1}
      />
      <Image
        src={
          "https://images.unsplash.com/photo-1661912267451-712c028d74a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        }
        idx={2}
      />
      <Image
        src={
          "https://images.unsplash.com/photo-1661895581832-51c8e3538b4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        }
        idx={3}
      />
      <Image
        src={
          "https://images.unsplash.com/photo-1661836890977-1cc392056094?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        }
        idx={4}
      />
      <Image
        src={
          "https://images.unsplash.com/photo-1661900980235-db5affe17d8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1567&q=80"
        }
        idx={5}
      />
      <Image
        src={
          "https://images.unsplash.com/photo-1661901060088-32dbfeb040df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        }
        idx={6}
      />
      <Image
        src={
          "https://images.unsplash.com/photo-1661890090656-6bf16bbdee4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80"
        }
        idx={7}
      />
    </section>
  );
}

export default App;
