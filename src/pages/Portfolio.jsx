import Assets from "@/components/Assets";
import Header from "@/components/Header";
import ProductAnimation from "@/components/ProductAnimation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { assets3d } from "@/JSON/3dassets";
import { characters } from "@/JSON/character";
import { realEstate } from "@/JSON/Interior";
import { products } from "@/JSON/product";
import Footer from "../components/Footer";

const Portfolio = () => {
  const d3assets = assets3d[0].projects;
  const character = characters[0].projects;
  return (
    <>
      <div className="h-full w-full bg-black py-32  bg-grid-white/[0.2] relative flex ">
        <Header />
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black   [mask-image:radial-gradient(transparent_75%,#a257e6)]"></div>
        <div className=" relative min-h-screen text-white px-8 w-full ">
          <h1 className="text-4xl font-bold mb-8 text-purple-600 text-center">
            Our Portfolios
          </h1>
          <Tabs defaultValue="3dassets" className="w-full">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="3dassets">3D ASSETS</TabsTrigger>
              <TabsTrigger value="cgiadv">CGI ADVERTISEMENTS</TabsTrigger>
              <TabsTrigger value="charactermodelling">
                CHARACTER MODELING
              </TabsTrigger>
              <TabsTrigger value="interiorexterior">
                INTERIOR & EXTERIOR
              </TabsTrigger>
              <TabsTrigger value="product">PRODUCT MODELLING</TabsTrigger>
              <TabsTrigger value="productanimation">
                PRODUCT ANIMATION
              </TabsTrigger>
            </TabsList>
            <TabsContent value="charactermodelling">
              <Assets d2assets={characters} name={"Character Modelling"} />
            </TabsContent>
            <TabsContent value="interiorexterior">
              <Assets d2assets={realEstate} name={"INTERIOR & EXTERIOR"} />
            </TabsContent>
            <TabsContent value="3dassets">
              <Assets d2assets={d3assets} name={"3D Assets"} />
            </TabsContent>

            <TabsContent value="product">
              <Assets
                d2assets={products}
                name={"Product Modelling"}
                imageHeight={"h-84"}
              />
            </TabsContent>
            <TabsContent value="cgiadv">
              <div className="min-h-screen text-gray-100 p-8">
                <h2 className="text-4xl font-extrabold text-purple-400 text-center mb-12">
                  CGI Advertisements
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                  {/* Video 1 */}
                  <iframe
                    src="https://www.youtube.com/embed/S1SwIU90T2Q?autoplay=1&loop=1&mute=1&controls=0&playlist=S1SwIU90T2Q"
                    className="w-full aspect-square"
                    allow="autoplay"
                    frameBorder="0"
                  ></iframe>

                  {/* Video 2 */}
                  <iframe
                    src="https://www.youtube.com/embed/ZSq14BKkR2U?autoplay=1&loop=1&mute=1&controls=0&playlist=ZSq14BKkR2U"
                    className="w-full aspect-square"
                    allow="autoplay"
                    frameBorder="0"
                  ></iframe>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="productanimation">
              <ProductAnimation />
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
