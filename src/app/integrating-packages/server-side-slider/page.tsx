import { ImageSlider } from "./components/ImageSlider";

// *** - check the importance of this - the image slider itself should continue being a client side render
export default function ServerSideSlider() {
    console.log("server side Log")
    return (
        <div>
            <ImageSlider />
        </div>
    )
}