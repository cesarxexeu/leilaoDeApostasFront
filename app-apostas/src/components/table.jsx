import React from "react";


class Table extends React.Component {
    render() {
      return(
        <div id="tablee">
          <h3 class="regiao">Brasil</h3>
        <table id="table">
          <tr>
            <th>Jogos</th>
            <th>Casa</th>
            <th>Empate</th>
            <th>Fora</th>
            <th>Mais</th>
          </tr>
          <tr>
            <h4 class="camp">Camp. Paulista, Série A1</h4>
            <th class="camp"></th>
            <th class="camp"></th>
            <th class="camp"></th>
            <th class="camp"></th>
          </tr>
          <tr>
            <td>
              <p>Botafogo FC SP x Ituano FC SP</p>
              <p>31/03/2022 20:00</p>
            </td>
            <td>2,68</td>
            <td>2,94</td>
            <td>2,73</td>
            <td id="mais">+241</td>
          </tr>
          <tr>
            <h4 class="camp">Copa do Nordeste</h4>
            <th class="camp"></th>
            <th class="camp"></th>
            <th class="camp"></th>
            <th class="camp"></th>
          </tr>
          <tr>
            <td>
              <p>BSport Clube do Recife x Fortaleza-CE</p>
              <p>31/03/2022 21:35</p>
            </td>
            <td>2,68</td>
            <td>2,94</td>
            <td>2,73</td>
            <td id="mais">+241</td>
          </tr>
          <tr>
            <h4 class="camp">Campeonato Paraibano</h4>
            <th class="camp"></th>
            <th class="camp"></th>
            <th class="camp"></th>
            <th class="camp"></th>
          </tr>
          <tr>
            <td>
              <p>São Paulo Crystal FC PB x Botafogo FC PB</p>
              <p>31/03/2022 20:15</p>
            </td>
            <td>4,15</td>
            <td>2,94</td>
            <td>2,05</td>
            <td id="mais">+236</td>
          </tr>
          <tr>
            <h4 class="camp">Campeonato Sergipano</h4>
            <th class="camp"></th>
            <th class="camp"></th>
            <th class="camp"></th>
            <th class="camp"></th>
          </tr>
          <tr>
            <td>
              <p>AD Confiança SE x Falcon SE</p>
              <p>31/03/2022 20:30</p>
            </td>
            <td>1,63</td>
            <td>3,57</td>
            <td>5,67</td>
            <td id="mais">+241</td>
          </tr>
          <tr>
            <h4 class="camp">Piauiense</h4>
            <th class="camp"></th>
            <th class="camp"></th>
            <th class="camp"></th>
            <th class="camp"></th>
          </tr>
          <tr>
            <td>
              <p>AA Altos PI x Fluminense EC</p>
              <p>31/03/2022 18:00</p>
            </td>
            <td>2,68</td>
            <td>2,94</td>
            <td>2,73</td>
            <td id="mais">+241</td>
          </tr>
          <tr>
            <h4 class="camp">Campeonato Capixaba</h4>
            <th class="camp"></th>
            <th class="camp"></th>
            <th class="camp"></th>
            <th class="camp"></th>
          </tr>
          <tr>
            <td>
              <p>Vilavelhense-ES x Serra FC ES</p>
              <p>31/03/2022 19:00</p>
            </td>
            <td>2,68</td>
            <td>2,94</td>
            <td>2,73</td>
            <td id="mais">+241</td>
          </tr>
          <tr>
            <h4 class="camp">Copa do Nordeste</h4>
            <th class="camp"></th>
            <th class="camp"></th>
            <th class="camp"></th>
            <th class="camp"></th>
          </tr>
          <tr>
            <td>
              <p>BSport Clube do Recife x Fortaleza-CE</p>
              <p>31/03/2022 21:35</p>
            </td>
            <td>2,68</td>
            <td>2,94</td>
            <td>2,73</td>
            <td id="mais">+241</td>
          </tr>
        </table>
          <h3 class="regiao">Argentina</h3>
          <table id="table">
          <tr>
            <th>Jogos</th>
            <th>Casa</th>
            <th>Empate</th>
            <th>Fora</th>
            <th>Mais</th>
          </tr>
          <tr>
            <h4 class="camp">Copa de la Superliga</h4>
            <th class="camp"></th>
            <th class="camp"></th>
            <th class="camp"></th>
            <th class="camp"></th>
          </tr>
          <tr>
            <td>
              <p>CA Colón Santa Fé x CA Aldosivi</p>
              <p>31/03/2022 21:30</p>
            </td>
            <td>2,68</td>
            <td>2,94</td>
            <td>2,73</td>
            <td id="mais">+241</td>
          </tr>
          </table>
        </div>
      );
    }
  }
  
  export default Table;