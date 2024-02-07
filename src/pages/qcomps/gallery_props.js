function Scientists({src, alt, width=70, height=70, profession, awards, discovered}) {
  return (
    <section className="profile">
      <h2>{alt}</h2>
      <img
        className="avatar"
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: </b>
          {awards}
        </li>
        <li>
          <b>Discovered: </b>
          {discovered}
        </li>
      </ul>
    </section>
  );

}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Scientists
        src='https://i.imgur.com/szV5sdGs.jpg'
        alt="Maria Skłodowska-Curie"
        width={70}
        height={70}
        profession="physicist and chemist"
        awards="4 (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)"
        discovered="polonium (element)"
      />
      <Scientists
        src='https://i.imgur.com/YfeOqp2s.jpg'
        alt="Katsuko Saruhashi"
        width={70}
        height={70}
        profession="geochemist"
        awards="2 (Miyake Prize for geochemistry, Tanaka Prize)"
        discovered="a method for measuring carbon dioxide in seawater"
      />
    </div>
    // <div>
    //   <h1>Notable Scientists</h1>
    //   <section className="profile">
    //     <h2>Maria Skłodowska-Curie</h2>
    //     <img
    //       className="avatar"
    //       src='https://i.imgur.com/szV5sdGs.jpg'
    //       alt="Maria Skłodowska-Curie"
    //       width={70}
    //       height={70}
    //     />
    //     <ul>
    //       <li>
    //         <b>Profession: </b>
    //         physicist and chemist
    //       </li>
    //       <li>
    //         <b>Awards: 4 </b>
    //         (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)
    //       </li>
    //       <li>
    //         <b>Discovered: </b>
    //         polonium (element)
    //       </li>
    //     </ul>
    //   </section>
    //   <section className="profile">
    //     <h2>Katsuko Saruhashi</h2>
    //     <img
    //       className="avatar"
    //       src='https://i.imgur.com/YfeOqp2s.jpg'
    //       alt="Katsuko Saruhashi"
    //       width={70}
    //       height={70}
    //     />
    //     <ul>
    //       <li>
    //         <b>Profession: </b>
    //         geochemist
    //       </li>
    //       <li>
    //         <b>Awards: 2 </b>
    //         (Miyake Prize for geochemistry, Tanaka Prize)
    //       </li>
    //       <li>
    //         <b>Discovered: </b>
    //         a method for measuring carbon dioxide in seawater
    //       </li>
    //     </ul>
    //   </section>
    // </div>
  );
}
