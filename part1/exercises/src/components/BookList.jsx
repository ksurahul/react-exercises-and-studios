export default function BookList() {
   let pageTitle = "Books";
   let book1 = "https://m.media-amazon.com/images/I/71-++hbbERL._AC_SL1000_.jpg";
   let book2 = "https://i0.wp.com/americanwritersmuseum.org/wp-content/uploads/2018/02/CK-3.jpg?resize=267%2C400&ssl=1";
   let book3 = "https://m.media-amazon.com/images/I/81bsw6fnUiL._SL1500_.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Harry Potter and the sorcerers stone" />
         <img src={book2} alt="The Great Gatsby" />
         <img src={book3} alt="Rich Dad Poor Dad" />
      </div>      
   );
}