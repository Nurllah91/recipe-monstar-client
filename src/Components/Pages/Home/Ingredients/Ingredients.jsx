import SectionHeading from "../../../Utils/SectionHeading";

// images
import soySauce from '../../../../assets/ingredients/soy-sauce.jpg'
import garlic from '../../../../assets/ingredients/garlic.jpg'
import ginger from '../../../../assets/ingredients/ginger.jpg'
import sesameOil from '../../../../assets/ingredients/sesame-oil.jpg'
import fiveSpicePowder from '../../../../assets/ingredients/five-spice-powder.jpg'
import riceVinegar from '../../../../assets/ingredients/rice-vinegar.jpg'
import oysterSauce from '../../../../assets/ingredients/oyster-sauce.jpg'
import hoisinSauce from '../../../../assets/ingredients/hoisin-sauce.jpg'
import shaoxingWine from '../../../../assets/ingredients/shaoxing-wine.jpg'
import greenOnions from '../../../../assets/ingredients/green-onions.jpg'
import blackBeanSauce from '../../../../assets/ingredients/black-bean-sauce.jpg'
import chiliPaste from '../../../../assets/ingredients/chili-paste.jpg'


const Ingredients = () => {
    return (
        <section className="w-11/12 lg:w-9/12 mx-auto overflow-hidden ">
            {/* section heading */}
            <SectionHeading title={"Ingredients for best recipe"}>
                Here is the top most Chinese ingredients for what you can use to your recipe at home. And make your dish more tasty and more beautiful. And surprise your family or client
            </SectionHeading>

            <div className="flex flex-wrap justify-center">
                <div className="relative group h-[480px] w-[240px] hover:w-[320px] transition-all duration-500">
                    <img className="w-full h-full overflow-hidden" src={soySauce} alt="Ingredients" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:via-[#000000a8] group-hover:to-black"></div>

                    <div className="absolute bottom-0 p-4">
                        <h3 className="text-2xl font-semibold text-white mb-3">Soy Sauce</h3>
                        <p className="hidden group-hover:block text-white">A fundamental element in Chinese cuisine, soy sauce adds depth, saltiness, and umami to a variety of dishes.</p>
                    </div>
                </div>

                <div className="relative group h-[480px] w-[240px] hover:w-[320px] transition-all duration-500">
                    <img className="w-full h-full overflow-hidden" src={ginger} alt="Ingredients" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:via-[#000000a8] group-hover:to-black"></div>

                    <div className="absolute bottom-0 p-4">
                        <h3 className="text-2xl font-semibold text-white mb-3">Ginger</h3>
                        <p className="hidden group-hover:block text-white">Whether minced, sliced, or grated, ginger brings a zesty and aromatic quality to Chinese recipes, enhancing both savory and sweet dishes.</p>
                    </div>
                </div>


                <div className="relative group h-[480px] w-[240px] hover:w-[320px] transition-all duration-500">
                    <img className="w-full h-full overflow-hidden" src={garlic} alt="Ingredients" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:via-[#000000a8] group-hover:to-black"></div>

                    <div className="absolute bottom-0 p-4">
                        <h3 className="text-2xl font-semibold text-white mb-3">Garlic</h3>
                        <p className="hidden group-hover:block text-white">A staple in Chinese cooking, garlic provides a pungent and robust flavor that forms the base of many savory dishes.</p>
                    </div>
                </div>


                <div className="relative group h-[480px] w-[240px] hover:w-[320px] transition-all duration-500">
                    <img className="w-full h-full overflow-hidden" src={sesameOil} alt="Ingredients" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:via-[#000000a8] group-hover:to-black"></div>

                    <div className="absolute bottom-0 p-4">
                        <h3 className="text-2xl font-semibold text-white mb-3">Sesame Oil</h3>
                        <p className="hidden group-hover:block text-white">This fragrant oil imparts a rich, nutty flavor to stir-fries, noodles, and dressings, contributing a distinctive taste to Chinese cuisine.</p>
                    </div>
                </div>


                <div className="relative group h-[480px] w-[240px] hover:w-[320px] transition-all duration-500">
                    <img className="w-full h-full overflow-hidden" src={fiveSpicePowder} alt="Ingredients" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:via-[#000000a8] group-hover:to-black"></div>

                    <div className="absolute bottom-0 p-4">
                        <h3 className="text-2xl font-semibold text-white mb-3">Five-Spice Powder</h3>
                        <p className="hidden group-hover:block text-white">A blend of star anise, cloves, Chinese cinnamon, Sichuan pepper, and fennel seeds, this seasoning adds a complex and aromatic profile to various dishes.</p>
                    </div>
                </div>


                <div className="relative group h-[480px] w-[240px] hover:w-[320px] transition-all duration-500">
                    <img className="w-full h-full overflow-hidden" src={riceVinegar} alt="Ingredients" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:via-[#000000a8] group-hover:to-black"></div>

                    <div className="absolute bottom-0 p-4">
                        <h3 className="text-2xl font-semibold text-white mb-3">Rice Vinegar</h3>
                        <p className="hidden group-hover:block text-white">Mild and slightly sweet, rice vinegar is a key ingredient in many Chinese sauces, providing acidity and balance to the overall flavor.</p>
                    </div>
                </div>


                <div className="relative group h-[480px] w-[240px] hover:w-[320px] transition-all duration-500">
                    <img className="w-full h-full overflow-hidden" src={oysterSauce} alt="Ingredients" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:via-[#000000a8] group-hover:to-black"></div>

                    <div className="absolute bottom-0 p-4">
                        <h3 className="text-2xl font-semibold text-white mb-3">Oyster Sauce</h3>
                        <p className="hidden group-hover:block text-white">A thick, savory sauce made from oysters, soy sauce, and other seasonings, oyster sauce imparts a rich and slightly sweet taste to stir-fries and marinades.</p>
                    </div>
                </div>


                <div className="relative group h-[480px] w-[240px] hover:w-[320px] transition-all duration-500">
                    <img className="w-full h-full overflow-hidden" src={hoisinSauce} alt="Ingredients" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:via-[#000000a8] group-hover:to-black"></div>

                    <div className="absolute bottom-0 p-4">
                        <h3 className="text-2xl font-semibold text-white mb-3">Hoisin Sauce</h3>
                        <p className="hidden group-hover:block text-white">A fundamental element in Chinese cuisine, soy sauce adds depth, saltiness, and umami to a variety of dishes.</p>
                    </div>
                </div>

                <div className="relative group h-[480px] w-[240px] hover:w-[320px] transition-all duration-500">
                    <img className="w-full h-full overflow-hidden" src={blackBeanSauce} alt="Ingredients" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:via-[#000000a8] group-hover:to-black"></div>

                    <div className="absolute bottom-0 p-4">
                        <h3 className="text-2xl font-semibold text-white mb-3">Black Bean Sauce</h3>
                        <p className="hidden group-hover:block text-white">Made from fermented black soybeans, this savory and salty sauce adds a distinctive umami flavor to stir-fries and seafood dishes.</p>
                    </div>
                </div>

                <div className="relative group h-[480px] w-[240px] hover:w-[320px] transition-all duration-500">
                    <img className="w-full h-full overflow-hidden" src={chiliPaste} alt="Ingredients" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:via-[#000000a8] group-hover:to-black"></div>

                    <div className="absolute bottom-0 p-4">
                        <h3 className="text-2xl font-semibold text-white mb-3">Chili Paste (Doubanjiang or Sriracha)</h3>
                        <p className="hidden group-hover:block text-white">For those who enjoy a bit of heat, chili paste provides a spicy kick to Chinese recipes. Doubanjiang is a fermented chili bean paste, while Sriracha offers a tangy and garlicky heat. Adjust the quantity based on your spice preference.</p>
                    </div>
                </div>


                <div className="relative group h-[480px] w-[240px] hover:w-[320px] transition-all duration-500">
                    <img className="w-full h-full overflow-hidden" src={shaoxingWine} alt="Ingredients" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:via-[#000000a8] group-hover:to-black"></div>

                    <div className="absolute bottom-0 p-4">
                        <h3 className="text-2xl font-semibold text-white mb-3">Shaoxing Wine</h3>
                        <p className="hidden group-hover:block text-white">This Chinese cooking wine adds depth of flavor and enhances the aroma of dishes. It&apos;s commonly used in marinades, stir-fries, and braised dishes.</p>
                    </div>
                </div>


                <div className="relative group h-[480px] w-[240px] hover:w-[320px] transition-all duration-500">
                    <img className="w-full h-full overflow-hidden" src={greenOnions} alt="Ingredients" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:via-[#000000a8] group-hover:to-black"></div>

                    <div className="absolute bottom-0 p-4">
                        <h3 className="text-2xl font-semibold text-white mb-3">Green Onions (Scallions)</h3>
                        <p className="hidden group-hover:block text-white">A versatile and fresh ingredient, green onions are used in both cooked and raw dishes, providing a mild onion flavor and vibrant color to Chinese recipes.</p>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default Ingredients;