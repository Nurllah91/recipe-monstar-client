import { useLoaderData } from "react-router-dom";
import './Home.css'

const Home = () => {
    const chefs = useLoaderData();
    return (

        <div>
            <div className="homeBanner">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, corrupti molestiae? Minima reprehenderit velit optio ullam sed esse voluptate asperiores vero atque libero voluptatem assumenda quas fuga dolorem alias debitis cum corporis, exercitationem nam culpa illo, architecto doloribus. Vitae, asperiores. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium aperiam recusandae laudantium porro quisquam similique obcaecati excepturi consequatur voluptas libero molestias veritatis amet nisi magni unde accusantium odio placeat dicta eos, aut iusto quis impedit quos asperiores! Illo ex iste fuga deleniti optio, doloremque ipsa. Aliquid porro dignissimos quo numquam similique quos. Nesciunt aut voluptatem ex sapiente, unde consequuntur exercitationem iusto tempore molestias mollitia a? Iste libero nulla mollitia non tenetur a, dolorum odit enim, deserunt quod commodi vel ex unde illum eius! Nisi voluptas voluptatum, pariatur nemo porro nesciunt dolorum architecto. Quo, suscipit. Dicta culpa cum, unde aliquam, laboriosam, dolorem sapiente voluptatum distinctio temporibus suscipit amet perspiciatis nemo officiis id minus ex aliquid consequuntur veniam. Inventore, voluptas iusto perspiciatis natus vero numquam nostrum dolore omnis distinctio laborum voluptates tempora est molestias veritatis qui rem ipsa quasi at hic ipsam impedit. Quia expedita ducimus quis reprehenderit unde. Quisquam veniam esse eos laudantium, accusantium, voluptate fugiat quia quae error, ducimus asperiores quibusdam sed voluptatem sit quos? Dignissimos repellendus quis natus odio inventore consequatur voluptatem temporibus atque esse, blanditiis vel, explicabo voluptate? Aspernatur illo laborum quibusdam possimus rem sapiente quasi numquam ipsum reiciendis voluptas molestias culpa nam tempora, placeat magni odio fugiat itaque voluptatem? Ut odio, odit est itaque, perspiciatis soluta consequuntur ducimus exercitationem officia error numquam nulla adipisci! Atque necessitatibus blanditiis, eligendi deleniti asperiores reprehenderit iste quisquam nulla! Earum id perferendis velit veniam accusantium, quas assumenda at minima illum, nostrum quae cupiditate! Accusamus consectetur vitae, doloribus vero, debitis necessitatibus minus beatae maxime hic cupiditate assumenda consequuntur. Inventore dolorum tempora aspernatur optio! Corrupti voluptas corporis magni, voluptate ipsum, voluptatibus excepturi odit quis ratione laudantium accusamus! Quo, veritatis ullam, delectus doloremque impedit voluptatibus id magnam, illum odit tenetur rerum molestiae numquam deleniti at. Pariatur ex iusto vitae repudiandae et inventore eaque, iste laudantium eum obcaecati, illo exercitationem veniam nam atque? Eum autem repellendus vero ipsa delectus, reiciendis cum deserunt quia vel praesentium, necessitatibus sunt facere at! Laudantium dignissimos a error sed consectetur exercitationem. Quam unde sunt dolorem adipisci molestiae corrupti sit recusandae nostrum odit quis? Fugit perferendis suscipit laborum tempora, praesentium, repudiandae reprehenderit earum nesciunt debitis provident fuga itaque nisi, ad excepturi repellat corrupti labore a aut quidem alias. Laboriosam, suscipit reiciendis? Quod, ipsa! Eos nostrum optio, id consequuntur dolore incidunt nesciunt unde debitis tempora nisi corporis placeat fugit facere ullam! Qui minus, quasi dolorem nobis facere perspiciatis! Veniam similique dolore laborum vitae nemo possimus numquam est, qui impedit ducimus esse autem non consectetur voluptate odit maxime, error, corrupti sunt quisquam tempore dolores iusto nam dolorum. Labore dolore eum dignissimos vero dolorum, asperiores, accusamus ea aspernatur voluptate in cupiditate dolor quos ipsam nisi animi repellendus repellat, sed rem! Ad maiores tempora ratione. Pariatur voluptas mollitia vero asperiores sequi sit obcaecati commodi iure repellendus, possimus voluptatem voluptates id cum quidem dolor expedita cumque ut accusantium iste modi distinctio? Doloribus consequuntur id enim facilis quidem debitis quos eius natus nulla libero! Esse omnis eius quia officiis placeat quaerat commodi ullam quod illo nulla. Magni, consequatur!</p>

            </div>





           <h2 className="text-5xl">Available chefs: {chefs.length}</h2>
        </div>
    );
};

export default Home;