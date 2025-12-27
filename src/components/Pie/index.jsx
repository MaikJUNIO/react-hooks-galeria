import { styled } from 'styled-components';

const PieEstilizado = styled.footer`
  position: relative;
  width: 100%;
  padding: 40px 0;
  background-color: #0c0c0c;
  margin-top: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;


const IconoContainer = styled.ul`
  margin: 0 auto;
  padding: 1rem;
  list-style: none;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  li {
    list-style: none;
  }

  a {
    font-size: 25px;
    color: #00b4d8;
    border: 2px solid #00b4d8;
    width: 42px;
    height: 42px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;
    transition: 0.3s ease-in-out;

	text-decoration: none;
  }

  a:hover {
    transform: scale(1.2) translateY(-10px);
    background-color: #00b4d8;
    color: black;
    box-shadow: 0 0 25px #00b4d8;
  }
  
`;


const PieTexto = styled.p`
	font-size: 16px;
	color: white;
	margin: 0;
`;

function Pie() {
	return (
    	<PieEstilizado>
        	<IconoContainer>
			<li>
			<a
				href="https://www.linkedin.com/in/sproutup"
				target="_blank"
				rel="noopener noreferrer"
			>
				<i className="bx bxl-linkedin"></i>
			</a>
			</li>

			<li>
			<a
				href="https://www.instagram.com/maik.casavilca"
				target="_blank"
				rel="noopener noreferrer"
			>
				<i className="bx bxl-instagram"></i>
			</a>
			</li>

			<li>
			<a
				href="https://github.com/MaikJUNIO"
				target="_blank"
				rel="noopener noreferrer"
			>
				<i className="bx bxl-github"></i>
			</a>
			</li>

			<li>
			<a
				href="https://twitter.com/@maik_up"
				target="_blank"
				rel="noopener noreferrer"
			>
				<i className="bx bxl-twitter"></i>
			</a>
			</li>
      </IconoContainer>
        	<PieTexto>Desarrollado por Charlotte.</PieTexto>
    	</PieEstilizado>
	);
}

export default Pie
