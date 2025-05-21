import Subscribe from "./components/Subscribe/Subscribe";
import Title from "./components/Title/Title";

export default function Home() {
    return (
        <div className="max-w-[1120px] w-full mx-auto py-[72px]">
            <Title title={"New Releases Books"} />
            <Subscribe />
        </div>
    )
}