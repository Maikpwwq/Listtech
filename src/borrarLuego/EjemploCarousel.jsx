import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

const { Component } = React;
const { render } = ReactDOM;

const carouselContainer = document.querySelector(".carousel-container");

// Data for carousel
const carouselSlidesData = [
    {
        content:
            "Tomorrow, you will be released. If you are bored of brawling with thieves and want to achieve something there is a rare blue flower that grows on the eastern slopes. Pick one of these flowers. If you can carry it to the top of the mountain, you may find what you were looking for in the first place.",
        author: "Bane",
        source: "facebook"
    }, {
        content:
            "You have learn to bury your guilt with anger. I will teach you to confront it and to face the truth.",
        author: "Ra's Al Ghul",
        source: "Snapchat"
    }, {
        content:
            "Introduce a little anarchy, upset the established order and everything becomes chaos. I'm an agent of chaos. Oh, and you know the thing about chaos? It's fair.",
        author: "Joker",
        source: "facebook"
    }, {
        content:
            "I can't do that as Bruce Wayne... as a man. I'm flesh and blood. I can be ignored, destroyed. But as a symbol, I can be incorruptible, I can be everlasting.",
        author: "Bruce Wayne",
        source: "facebook"
    }, {
        content:
            "But it's not who you are underneath... it's what you do that defines you.",
        author: "Rachel Dawes",
        source: "twitter"
    }, {
        content:
            "When their enemies were at the gates the Romans would suspend democracy and appoint one man to protect the city. It wasn't considered an honor, it was a public service.",
        author: "John Blake",
        source: "Google+"
    }, {
        content:
            "Master Wayne, you've been gone a long time. You look very fashionable. Apart from the mud.",
        author: "Alfred Pennyworth",
        source: "twitter"
    }
];

// Component for left arrow
class CarouselLeftArrow extends Component {
    render() {
        return (
            <a
                href="#"
                className="carousel__arrow carousel__arrow--left"
                onClick={this.props.onClick}
            >
                <span className="fa fa-2x fa-angle-left" />
            </a>
        );
    }
}

// Component for right arrow
class CarouselRightArrow extends Component {
    render() {
        return (
            <a
                href="#"
                className="carousel__arrow carousel__arrow--right"
                onClick={this.props.onClick}
            >
                <span className="fa fa-2x fa-angle-right" />
            </a>
        );
    }
}

// Component for carousel indicator
class CarouselIndicator extends Component {
    render() {
        return (
            <li>
                <a
                    className={
                        this.props.index == this.props.activeIndex
                            ? "carousel__indicator carousel__indicator--active"
                            : "carousel__indicator"
                    }
                    onClick={this.props.onClick}
                />
            </li>
        );
    }
}

// Component for slide
class CarouselSlide extends Component {
    render() {
        return (
            <li
                className={
                    this.props.index == this.props.activeIndex
                        ? "carousel__slide carousel__slide--active"
                        : "carousel__slide"
                }
            >
                <p className="carousel-slide__content">{this.props.slide.content}</p>

                <p>
                    <strong className="carousel-slide__author">
                        {this.props.slide.author}
                    </strong>,
          {" "}
                    <small className="carousel-slide__source">
                        {this.props.slide.source}
                    </small>
                </p>
            </li>
        );
    }
}

// Carousel component
class Carousel extends Component {
    constructor(props) {
        super(props);

        this.goToSlide = this.goToSlide.bind(this);
        this.goToPrevSlide = this.goToPrevSlide.bind(this);
        this.goToNextSlide = this.goToNextSlide.bind(this);

        this.state = {
            activeIndex: 0
        };
    }

    goToSlide(index) {
        this.setState({
            activeIndex: index
        });
    }

    goToPrevSlide(e) {
        e.preventDefault();

        let index = this.state.activeIndex;
        let { slides } = this.props;
        let slidesLength = slides.length;

        if (index < 1) {
            index = slidesLength;
        }

        --index;

        this.setState({
            activeIndex: index
        });
    }

    goToNextSlide(e) {
        e.preventDefault();

        let index = this.state.activeIndex;
        let { slides } = this.props;
        let slidesLength = slides.length - 1;

        if (index === slidesLength) {
            index = -1;
        }

        ++index;

        this.setState({
            activeIndex: index
        });
    }

    render() {
        return (
            <div className="carousel">
                <CarouselLeftArrow onClick={e => this.goToPrevSlide(e)} />

                <ul className="carousel__slides">
                    {this.props.slides.map((slide, index) =>
                        <CarouselSlide
                            key={index}
                            index={index}
                            activeIndex={this.state.activeIndex}
                            slide={slide}
                        />
                    )}
                </ul>

                <CarouselRightArrow onClick={e => this.goToNextSlide(e)} />

                <ul className="carousel__indicators">
                    {this.props.slides.map((slide, index) =>
                        <CarouselIndicator
                            key={index}
                            index={index}
                            activeIndex={this.state.activeIndex}
                            onClick={e => this.goToSlide(index)}
                        />
                    )}
                </ul>
            </div>
        );
    }
}

// Render Carousel component
render(<Carousel slides={carouselSlidesData} />, carouselContainer);

/*
var slideIndex = [1,1];
showSlides(slideIndex);  
        this.slideIndex = 1;
        this.showSlides = this.showSlides.bind(this);
        this.showSlides = this.showSlides(this.slideIndex);
    }

// Class the members of each slideshow group with different CSS classes
var slideId = [

"1 Biometría Control Acceso"
"2 Cerraduras electrónicas"
"3 Cerraduras mecánicas"
"4 Accesorios y Soportes"
"5 Salidas PUSH emergencia"
"6 Cierra puertas"
"7 Sensores y cantoneras electrónicas"
"8 Redes cableado estructurado"
"9 Acceso suspendido en alturas"
]

showSlides(1, 0);
showSlides(1, 1);

    // Next/previous controls
    PlusSlides= (n, no) => {
        this.showSlides(this.slideIndex[no] += n, no);
    }

    // Thumbnail image controls
    CurrentSlide= (n,no) => {
        this.showSlides(this.slideIndex[no] = n, no);
    } 

    showSlides= (n, no) => {
        console.log('Renderizado Productos');
        var i = ([]);
        var slides = document.getElementsByClassName(slideId[no]);        
        // var dots
        var descripciones = document.getElementsByClassName("CarruselDescripcion");

        if(n > slides.length) { this.slideIndex[no] = 1 }
        if (n < 1) { this.slideIndex[no] = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < descripciones.length; i++) {
            descripciones[i].className = descripciones[i].className.replace(" active", "");
        }
        slides[this.slideIndex[no] - 1].style.display = "block";
        descripciones[this.slideIndex - 1].className += " active";
}

setState(prevestado => {
  // Object.assign would also work
  return {...prevestado, ...updatedValues};
});*/