import React from "react";
import Navbar from "../components/Navbar";
import BadgeForm from "../components/BadgeForm";
import header from "../images/badge-header.svg";
import "./styles/BadgeNew.css";
import Badge from "../components/Badge";
class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
    },
  };
  handleChange = (e) => {
    console.log({ name: e.target.name, value: e.target.value });
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img src={header} alt="" className="img-fluid" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                jobTitle={this.state.form.jobTitle}
                twitter={this.state.form.twitter}
                email={this.state.form.email}
                avatarImage="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWEhgVFRISGBgYGBgYEhgYGBgYEhISGBgZGRgYGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QGBISGjEhIyExNDQ1NDExMTE0NDE0MTQ0NDQxNDE0NDE0NDQxNDQ0MTQ0NDQxNDQxMTQxMTExNDQxNP/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIDBQYEB//EAEQQAAIBAgQDBQQHAwoHAQAAAAABAgMRBAUSITFBUQZhcYGREyIyoRRSYrHB0fAkQnIjM0NTY4KSsuHxBxUXNHOiwhb/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAhEQEBAAIDAQEAAgMAAAAAAAAAAQIRAyExElFBYRQiMv/aAAwDAQACEQMRAD8AzSHDRyOD0nIchqQ6IZPSHpDYkkSgURbC2FsUCQthk6iXFpFZjc7hFWh7z5W4eZdJtbjkjHVc5rSe0tPchjzOq3f2kvw9BpNtqkOUTHUs8rRsnK/jxfmXODz+ErKa09XxjcaNrlIWwU5qSTi00901wZJYCPSFiSwtgIrBpJdIlgI7CaSVoSwRFYa0TWGSiBzVYXVjD4qKdSd2l77XB8nbkb2UTGZ7RjCr7qtqWqXe3KX5GoldfZ/Cz161K8L722Una29/E01iu7OR/kF/FItbGK0j0gSWAHSpSHpAkOSMt7IkPSFSHpFQiQ+IJDkih8Uc+Nq6IN87O3idCKftDW0wS6+qKiix2KlOV233K/BHOqcmuKXjsOpbu9juweU1Kr2jtfzFykZ1aq4QcnZbneqFlte97GkwnZia20Pfnb7y6o9lopbvfmc8uWRucdrzuvStx/TIFO3geg4nsvC74voVWM7MO21r8hjy40vHkqcpzeVKSi94N7/ZvzRtac1JKSd01dNcGjz/ABOXVIOzi/wLrs1meh+ym9n8Db+F9PA6zV8Yss9aiwth9gsXSGWEsSWCxNG0dhGiWwjQETQ1olaGyiBzyRi+0L/l/CEfvb/E3E1sYTPnfEz7tK/9U/xEGl7PR/Z4ef3lnY48ih+zw8H97O+xFNsKKBEVKQ9IEh6RHQRQ9ISMR6RQiQ9IVIckENsZzONVWsqcIt6dpeLNLJbEXZajq11JK8pzav8AZW35+hnPL5x21jj9XSXJ+zEFFa1dmsweBhBJRith+Giixo0zyfVy9ej5k8R+yuRToFnCAk4LuGjalqUSur0y9xMCqrwM+NRQY2C3ujFZnQ0VHbxXcbzHQMnn1Pgz08OXbly49LLAdrMKoRjVp4nWklOUNDhJrmk2mWFPtBgJf09aH8dF29YNnm1Ze8dVKgpK6Z9CZY32R469Qw3s6v8AM4ihU7ozSn/glZi1qEoO04yi+9WPK54Vovcn7X4mhaE37anwcKjbaX2JPeJr4wy86Pps2hLEuHqUq9JV8PJuHCcH8dGfSXd3jWjhnhcbqtI2hkkSDZIwIKi2Zgc33xFT+K3pFI39XgzzzMJXrVH9uXydvwA2uSx/Z4fw/izuscuUL+Qh/CjssShtgHaRQKmKHpAkOSI6BIfFAkPSKgSHJAkPsERzjs/B/cS9mY2ow8G/NtsNI3s/K0NP1Jzj6O5y5v8Al04b21mGW6LWiyuwEL7lzSpKx5sZXotKmNlEl9mCSXE3phXYikypxFMv8TNWKqok7mbi1KzuOjsZPO724cHubXHwjZ2afnuZbHQ+L5m8OqmXcYrErckwM3qsLiKdpW38uIyjNXVlw5nuxvTx5RZ1ItHJXhdXLRrVHyOCcbbG8bpzT9l85eFxMZveEvcrx5SpSe78VxXgekY2hom4p3W0oP60JK8X6M8irKzPTshxftsvoTbvKm5UKj5+570L/wB2SOmf+2O/xYmYyRJUkoq7eyMDnvaOdSThRk4QW2pfHPvT5R8Dzaam62WInFLeUV1u0jzmtK9Sb6yk/VtnFKLe7bb6vd/Mnih0vzY9Fypr2MLNP3Vw3Ow8phOUXeMpRfWLafyNJkHaOanGFaWqMmlGb+KEnsrvmuRLC9NmAaWA0m1Wh6QJD0iNlSHJCRRJFBAkPSBIVIqCwmAShUm20k2ptvgrpJ/5X6j2Q4zA6pQ1X08XZ8Vy+858mtarpxy720UM/wAPBb1I/iNfa2jwjJvydjL4nDwlNU6dNym9opydu9vu7/Q4cty6pKqoSg4u7U24yUYNX/e3T5epykmunbfb1DAZipxumGMxbSuU+WUFB6Huvv8AEtM2SVPZcjna2xea5zXUnolpXXn8ymWNrTl79fR48l4GuwmDWl7pSl+9a7jHnp6N9R2O7P0alpSptNR0+57qaV93bi92bmUYynbMvL4P3vauUuTV1+O4lHDT3Um5K1rviXbyCKknBOCW23NLuOqWGilvxJcmpGCwmUqpi405/C5XkusVu18rHZ2hy+EoTnTpxjGk4q8Va93pfDkdGOvCtqjs91fmWGdRjTy6ajwmqck+bbmlI6fV+ozljPmsxQ+BeBy4iG4YLFp2jbzJsWj1vCqcVE2f/DmvqpYqj0UK0fGL0z+WkyGIWxc/8O8RpzCEG9qsJ0n4zjdfOKO/H3LBbdrcW403GL3cZP8AD8Tz+ktjcdrVdK/SUX4/pGEjKyPPZ07cdku66IwuPiS5NQVSpple1ru3Gy/SLjHYOEIbLu5bHLLLV06bmVlZ2ULMZI6sSvxIcPS11IwXNpfmaxTk1pbf85rdZAaf/kq6oDW44umwsRB8TLVOih8UJFDkEKkPSESJEgHU4q6vwur+BZV6SU4x2tp26WK6KO5KVoTadt4p9Un+Bx5cbrcdeLL+HThssjq1xirvjsWcMLaNuC6IkwS2OmUG0cZ47VVqFpo6sc7x8iKrBqol1J8TSendbWMabiqwsUmWsLWKOVXRUTfw33XcamFGLjsakTJxTgrcCkzSNk2jQYlWM3m9S0X4DXYxWa13ruuO/wA9iPO8Z+wxg3u5xj5Rbm362OXHYiKqNydkmU+Y472klb4Y/D58WejHHeU/pyzykx0bgF768S3xELxKvLra0XNW2k9LyVTVeBFl+KdGvTqq96c4T8oSUmvREtRbnDVjuduO6qNd26q6cROny164f+OS1r/MYdvdmo7XSc6WDxF7+1w6pzf9ph5aJednEy9jOc1lW5N+OjBYmUJqcXuvRroy2xeYucUmkubtd8ikpw3Oo8+clr0cWHW6jryuyz7JQTxUb/Vk14qxWSQuGxEqdSM4veLTXf3ea2GPjPNjrt6mBm//ANlS/q5/IC6cNrdIfFDYj4kaPQ+I1DkA9D0NSHwi20km2+CXFs1JsT4Ohrmo3SXGUn8MILeUm+iSbMzmPavXjdVNv6NBKlSj1pRfxtfWlK8vBpHX2szeNKlLC0pJ1J2+lzjwpw4+xT6vbV3bc9srgcI5NO2xvLGSarMurt6/lOMU4KSfFbFzCd0efdm8ck3BP4bW8GbHD11Y+flPm2PZhl9TZM1coLXFOVuS49xx4vNqrpJezndqysrpPxRZ1KyJqFVK2zfgZjW/6ZWGBxFVJSgoK61Nv3tPPbqbGE7KxW4zFxT3siOjjU/3lceLbb66sXIyWeT2Zp5yujK5vL4u5Fx7pXnGeTtt1ZS6ixzud6nqcNOm20kt2e3Hx4+S7yqShUlHdM61mE7EmHyycv3Xs7PuZa0MrjFXmjbkpYubd9L8+BFVe+9kWeY14xWmJUKDle3E6YjSYan7fKa0FdywlaNePX2NZOE/SUYyMomajsTjI0sWoVf5rEQlh665aKmyflJRKLNcvlh69ShP4qc3F/aSe0l3NWfmXkm+3TCosPu/9jolTe9lfjbgccUSWPPlI9OH0XUMnEdGCBkMpbO0FmBKBrbl8R6XFj4nmNXFTl8U6kvGUmvS42FaS4TmvCTX3MsxctvVEOizzXDZliE0oVajbdkrubb5JJ3ubTBYiph4KpjqkVdXp0IxX0mp3y07QXj8jpjw29w2vsPQlO9rJLeUpO0Irq3yKPOO1UIJ0sI7ye08R06qkv8A69Opn877RVcR7u1OkvhpQ2i++b/ffjt3FMpG5ccOp7+pa76NO73d77t8W7vdvzdy3niFSpKL4lFTxFnF9HZ+DVn8mQYzFSm7N3tscr2yscszh068Zu7V7S/hfH8/I9Zy/EKcVZrdJp9TxCj19DW9k8/0SVKb2b9yXJP6rPNzYbm49HFlrqvRsaqjXuaVbi3e/wAiHC65casY+Kf5nXha6mroleAhLdr5tfceXG6eqWRX1cHBJyqVFOfKKuoR8uYuVYKCbloj3Oyv5Ms6WXU1v7OPmrv5i1mkti5XZctxHiKqUGYbtDjdNN9WX2cZhGMeNvHkeYZ5mrqVLQfura504sba5Z5TGKvFT1T8OIlCs4TU48YtNdHbkMk7IhueydPLld16Jhs7py1zhBR1uErdHoUZb+MG/Mos1zG97FJh8S4x4/rciqVGyxgtSo27s7Mup3hOb4LZeJWTZd4CK9gm3spO/Vy6eljWzZsKUfZycm19V87l1nsPpuDhjI71qEVTxkV8UoLaFX8/9CiqzlN2StFK/glzZPk+Zzw1ZVIq6a01IP4alN8YP9cTthZZcb/JjdVSRkSqRoM+7PRaWJwj14apulf3qE+dOa5Wey/2vUQyiu+EPmjjnx/N1Xow5dOZsa5dC1odm8RLjFLxNFlfZiEHqm9T5d35HPUhlybYz6FU+pL0FPT/AKND6kPRCjf9Oe3kh3ZTldTEVFCnG74yb2hCPOUnyRz4XDSnUjCCvOclGC6ybsjX5k1Qh9Bwzu1/3dRcatT96N/qrhb/AFv68MZr6y8jCL6bh8EnDDaauI4TxEknCHVUo8PP5sz+IrTnNznKU5y3lKTvJs6a9BQW/EqqlW72M58lvU6ibSymMcyK7FRyDnMRBYcjO1SKWw6LI0KmSrK2vZjtQ4WhVe3CM3zXSX5nomFzSDSepNW432PCFM6KOPqQ2hUnHuT29Dhlwy3cdseSz17vPNIpfEjM5x2mpQTbmvBNXfcjy6rmVWStKtUa8fyORyV7u7fVicP6Xl/Ftm+dzrydrqP4dEVEpJbIbKY2x1xxmPjnllb6RjowBIekaYNsMaJmNZQxRuTYevKHB7dOREkO0lRcU8dHRay3d5v7MeEfN2f904q0tTbORSsPjUNY9C4yDPJ4abslOnPatSl8FSPDykuTNjDD05w9vhpa6T+OP9JQlzjNdO/p6nna3O3Kszq4aop0pWfCSe8KkfqzXNHo3Mpqkr0GlK6JkiLK8VSxUHOgtE0r1aN7uP2odY/rxlTPNnx3G9tFAAOYxXYOEYSxGKkk/o9FuC/tanuw+6XqWGEcKWEdSbvObbbe7tfj4lVlM9OWYh/WrU4vwilIq8wxznGML7JHq5ZrGT9Sxy5hi9c21w5HNGIthThsACCkAKIKA5DiOLHogRiMcDQDA0jrC2Cm2Cw6wtghqQtwY1sBWxj6A2KlYoW4ahoqQCCDmCRdoWE2jspNS2OOwQk0zcossNXnRqRnCThOLvGS/W67j0jKcyhjablFKGIgr1ILhUX14fkeeYGpGfuy58CxWGq4WpGpCTTTvFpbefcd5ljlPnJJWz0y6S9AIP8AqE/6mPqwJ/j4/rW2IyypF5biYNpONSlNJ87+7t/hZRMI7L7wOOef1JPw2ahRUBzDREEh1iBEOQlhyAbJCwkOcRjiA9CkaYuoB4DbhcB1xHILCWAS4kmDYiiAsI8xZDmMKBIcgFS2ASwMEKUCBoUGWVC0Z6ZJrkbZ472uGVmroxFiyy3F6U4+hr1NOm0+/wCQoz6UBVUYILgjkoCTBjWQJFcx4JBYAFQWFQCoVoQUBLBYUADSJYViADGzYspWEhHm/wDYBFEdFC2CwDWgsOsDAa+A6QNCT4lAkAoAAXEsLYqAVSEC5vGh3tGAzWBvcNo7ixY1hFnnU9iRQo5IAYWFsCAQVACAVggAAEFABAkwbI3uwFiru78iQRCgKgAEADR1wYCchqFYxAOTAEhLlCpijbihCtCACGw0BwF2qJjRRDIlSHCJjkAAAAAIAAViXAAFEuKJNgMnIdBbDIokQAKIxQFEAQBwjAQAZHF/ex7ZFB8gJeIWG6hAJLhcjQ4B+oRjQAUBgBDGIABUsR6AAAEAADAAAAAAFGSAACA8AAQVAAQMRAAU6I0AKGy4EP7wAQSBEAKHBEAIARAACAABH//Z"
              />
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
