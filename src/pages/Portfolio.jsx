import Assets from "@/components/Assets";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { assets3d } from "@/JSON/3dassets";
import Footer from "../components/Footer";

const Portfolio = () => {
  const d3assets = assets3d[0].projects;
  return (
    <>
      <div className="h-full w-full bg-black py-32  bg-grid-white/[0.2] relative flex ">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className=" relative text-white px-8 w-full ">
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
              <TabsTrigger value="product">PRODUCT</TabsTrigger>
              <TabsTrigger value="productanimation">
                PRODUCT ANIMATION
              </TabsTrigger>
            </TabsList>
            <TabsContent value="projects">
              <h2 className="text-2xl font-semibold mb-4 ">My Projects</h2>
              <p>Here you can list your projects...</p>
            </TabsContent>
            <TabsContent value="skills">
              <h2 className="text-2xl font-semibold mb-4 ">My Skills</h2>
              <p>Here you can list your skills...</p>
            </TabsContent>
            <TabsContent value="3dassets">
              <Assets d2assets={d3assets} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
