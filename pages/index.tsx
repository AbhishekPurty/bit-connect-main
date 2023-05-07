import Form from "@/components/Form";
import Header from "@/components/Header";
import PostFeed from "@/components/posts/PostFeed";

export default function Home() {
  return (
    <>
    {/* This is the heading of the middle column section */}
    <Header label="Home" />
    <Form placeholder="Whats happening?" />
    <PostFeed />
    </>
  )
}
