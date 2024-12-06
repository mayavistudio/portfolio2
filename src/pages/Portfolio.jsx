import Assets from "@/components/Assets";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { assets3d } from "@/JSON/3dassets";
import Footer from "../components/Footer";

const Portfolio = () => {
  const d3assets = assets3d[0].projects;
  return (
    <>
      <div className="min-h-screen bg-black text-white p-8 py-28">
        <h1 className="text-4xl font-bold mb-8 text-purple-600 text-center">
          Our Portfolio
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
      <Footer />
    </>
  );
};

export default Portfolio;
