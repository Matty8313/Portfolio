import React, { useState } from 'react'
import "./language.scss"
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Link } from "react-router-dom";

const text1 = 'siema'


export default function Language() {
        const [polish, setPolish] = useState(false)
        const location = useLocation().pathname
         //location.pathname will give you current route path 

        function changeLanguage(){
            setPolish(true)
            console.log(polish)
        }
                function changeLanguage2(){
            setPolish(false)
            console.log(polish)
        }
        useEffect(() => {
            if(polish === true && (location === '/Portfolio' || location=== '/Portfolio/')){
                document.getElementById('kloc-1').innerText = "Jestem studentem zarządzania. Ukończyłem studia o kierunku finanse i rachunkowość w międzyczasie jak nie programowałem."
                document.getElementById('kloc-2').innerText = "Interesuję się stronami internetowymi. Jednak moim zdaniem wordpress nie oferuje tak wielu możliwości i wydajności jak dedykowane strony internetowe. Dlatego zainteresowałem się pisaniem stron od podstaw. I póki co moimi ulubionymi są miejsca SPA, bo dają dużo satysfakcji"
                document.getElementById('kloc-3').innerText = "Mam już kilka projektów stron internetowych oraz aplikację mobilną, z której sam korzystam. MPlanner, który służy do planowania tygodnia i oszczędza pamięć w LocalStorage. Uruchomiłem to rozwiązanie internetowe przez AndroidStudio i używam go na moim telefonie"
                document.getElementById('kloc-4').innerText = "Strona została stworzona przeze mnie, aby pokazać moje umiejętności i projekty osobom zainteresowanym współpracą."
                    if(window.innerWidth > 500){
                        document.getElementById('sidebar1').innerText = "Główna"
                        document.getElementById('sidebar2').innerText = "O mnie"
                        document.getElementById('sidebar3').innerText = "Umiejętności"
                        document.getElementById('sidebar4').innerText = "Projekty"
                        document.getElementById('sidebar5').innerText = "Kontakt"
                        }
                        document.getElementById('h111').innerText = "O Mnie"
                        document.getElementById('h222').innerText = "Umiejętności"
                        document.getElementById('h333').innerText = "Projekty"
                
                        document.getElementById("btn-more-1").innerText = "Więcej"
                        document.getElementById("btn-more-2").innerText = "Więcej"
                        document.getElementById("btn-more-3").innerText = "Więcej"
    
                
                }else if(location === "/About" && polish === true){
                    document.getElementById('kloc-5').innerText = "Nazywam się Mateusz Płocica, mam 23 lata. Ukończyłam finanse i rachunkowość. Jestem w stanie pomóc w programowaniu stron w React Js z wykorzystaniem HTML, CSS i Js, co i tak robię w wolnym czasie. Prowadziłem bloga o SEO o nazwie seo.kasade.pl, który stworzyłem na wordpressie, ale bardziej lubiłem pisać kod niż artykuły o SEO, ale dzięki temu zdobyłem podstawową wiedzę o SEO, więc jestem w stanie pomóc Ci w pisaniu wyszukiwarek strony przyjazne dla silników."
                    document.getElementById('kloc-6').innerText = "Moją misją jest wspieranie polskich mikro i małych przedsiębiorstw, przyczyniając się do rozwoju gospodarczego Polski i poprawy dobrobytu. Chcę pomóc przedsiębiorcom tworzyć wartość dodaną w Polsce poprzez moje rozwiązania i automatyzację zadań. W tym Wasze."
                    document.getElementById('kloc-7').innerText = "Lubię książki marketingowe, zwłaszcza Claude'a Hopkina, które skupiają się głównie na potrzebach konsumentów i klientów, a niekoniecznie na cechach produktu. Chciałbym kiedyś korzystać z systemu AdWords i dobrze go poznać, aby zwiększyć ruch w witrynie."
                    document.getElementById('kloc-8').innerText = "O mnie"
                    document.getElementById('kloc-9').innerText = "Misja"
                    document.getElementById('kloc-10').innerText = "Marketing"
                    if(window.innerWidth > 500){
                        document.getElementById('sidebar1').innerText = "Główna"
                        document.getElementById('sidebar2').innerText = "O mnie"
                        document.getElementById('sidebar3').innerText = "Umiejętności"
                        document.getElementById('sidebar4').innerText = "Projekty"
                        document.getElementById('sidebar5').innerText = "Kontakt"
                        }
            document.getElementById('txt').innerText = "Zaczęło się od stworzenia własnej strony internetowej na wordpress, ponieważ chciałem stworzyć bloga o SEO."
            
        }else if(location === "/Skills" && polish === true){
            document.getElementById('kloc-11a').innerText = "Umiem HTML w stopniu zadowalającym oraz mając dobre podstawy semantyki."
            document.getElementById('kloc-12a').innerText = "Najwięcej korzystałem z css do tej pory animacje i media screen nie są mi obce."
            document.getElementById('kloc-13a').innerText = "Teraz intesywnie uczę się JavaScript, ponieważ można w nim zrobić stronę od zera i daje nieograniczone możliwości interakcji z użytkownikiem co daje mi dużo satysfakcji z tworzenia właśnie w nim"
            document.getElementById('kloc-14a').innerText = "Ze względu na to, że w wielu przypadkach zmieniamy kolory, co było uciążliwe, postanowiłem zainteresować się preprocesorami i wybrałem sass i stale go używam, ale zdaję sobie sprawę, że nie wykorzystuję go w pełni"
            document.getElementById('kloc-15a').innerText = "Chciałem spróbować jak wygląda pisanie kodu we frameworkach i po ciężkim starcie zdecydowałem się zostać przy React, bo bardzo spodobały mi się strony SPA, które zapewniają duży komfort użytkowania UX, krótko mówiąc są bardzo przyjemne w użytkowaniu. Właśnie tę stronę napisałem z użyciem wymienionych technologii"
            
            if(window.innerWidth > 500){
                document.getElementById('sidebar1').innerText = "Główna"
                document.getElementById('sidebar2').innerText = "O mnie"
                document.getElementById('sidebar3').innerText = "Umiejętności"
                document.getElementById('sidebar4').innerText = "Projekty"
                document.getElementById('sidebar5').innerText = "Kontakt"
                }
            
        }else if(location === "/Projects" && polish === true){
            document.getElementById('kloc-ar1').innerText = "Chciałbym tworzyć narzędzia wspierające rozwój osób fizycznych i przedsiębiorstw, dlatego hobbystycznie tworzę aplikacje ułatwiające ludziom życie. W tej chwili stworzyłem aplikację MyWeek, która zapisuje zadania do wykonania poprzez zapisywanie danych w LocalStorage na telefonie za pomocą Androida WebView. Możesz wskazać, czy zadania tygodnia zostały wykonane zadowalająco, doskonale, czy wcale. Korzystałem z technologii webowych HTML, JavaScript i CSS. Może i Wam pomogę uczynić świat bardziej przyjaznym ludziom."
            document.getElementById('kloc-ar2').innerText = "Jestem również w trakcie tworzenia organizwea, w którym użytkownik można zapisywać zadania do wykonania w dogodnych blokach czasowych. Projekt jest jeszcze w budowie, ale od strony frontendowej działa dobrze. Możesz obejrzeć film pokazujący to w akcji."

            if(window.innerWidth > 500){
                document.getElementById('sidebar1').innerText = "Główna"
                document.getElementById('sidebar2').innerText = "O mnie"
                document.getElementById('sidebar3').innerText = "Umiejętności"
                document.getElementById('sidebar4').innerText = "Projekty"
                document.getElementById('sidebar5').innerText = "Kontakt"
                }
    
            
        }else if(location === "/Contact" && polish === true){
            if(window.innerWidth > 500){
                document.getElementById('sidebar1').innerText = "Główna"
                document.getElementById('sidebar2').innerText = "O mnie"
                document.getElementById('sidebar3').innerText = "Umiejętności"
                document.getElementById('sidebar4').innerText = "Projekty"
                document.getElementById('sidebar5').innerText = "Kontakt"
                }
            
            document.getElementById('concon1').innerText = "Telefon"
            document.getElementById('SMS').innerText = "Jeśli nie odbieram proszę o wysłanie SMS"
            document.getElementById('concon3').innerText = "e-mail"
        }else if(polish === false && (location === '/Portfolio' || location === '/Portfolio/')){/// Tutaj jesli angielski
            document.getElementById('kloc-1').innerText = "I am a management student. I graduated with a degree in Finance and Accounting while I was not programming."
            document.getElementById('kloc-2').innerText = " I am interested in websites. But in my opinion, wordpress does not offer as much possibilities and efficiency as dedicated websites. That's why I got interested in writing pages from scratch. And so far my favorite are SPA sites, because they give a lot of satisfaction."
            document.getElementById('kloc-3').innerText = "I already have several website designs and a mobile application that I use myself. MPlanner, which is used to schedule the week and saves memory in LocalStorage. I ran this web solution through androidStudio and I use it on my phone."
            document.getElementById('kloc-4').innerText = "The site was created by me to show my skills and projects to those interested in cooperation."

            if(window.innerWidth > 500){
            document.getElementById('sidebar1').innerText = "Main"
            document.getElementById('sidebar2').innerText = "About"
            document.getElementById('sidebar3').innerText = "Skills"
            document.getElementById('sidebar4').innerText = "Projects"
            document.getElementById('sidebar5').innerText = "Contact"
            }
            document.getElementById('h111').innerText = "About me"
            document.getElementById('h222').innerText = "Skills"
            document.getElementById('h333').innerText = "Projects"

            document.getElementById("btn-more-1").innerText = "More"
            document.getElementById("btn-more-2").innerText = "More"
            document.getElementById("btn-more-3").innerText = "More"

            
            }else if(location === "/About" && polish === false){
            document.getElementById('kloc-5').innerText = "My name is Mateusz Płocica, I am 23 years old. I graduated in finance and accounting. I am able to help you in programming pages in React Js using HTML, CSS and Js, which I do anyway in my free time. I ran a blog about SEO called seo.kasade.pl, which I created on wordpress, but I liked writing code more than articles about SEO, but thanks to that I gained basic knowledge about SEO, so I am able to help you write search engine friendly sites."
            document.getElementById('kloc-6').innerText = "My mission is to support Polish micro and small enterprises, contributing to the economic development of Poland and improving prosperity. I want to help entrepreneurs create added value in Poland through my solutions and automation of tasks. Including yours."
            document.getElementById('kloc-7').innerText = "I like marketing books, especially Claude Hopkin's, which focuses mainly on the needs of consumers and customers, and not necessarily product features. I would like to use the AdWords system someday and learn it well to create more website traffic."
            document.getElementById('kloc-8').innerText = "About me"
            document.getElementById('kloc-9').innerText = "Mission"
            document.getElementById('kloc-10').innerText = "Marketing"

        if(window.innerWidth > 500){
            document.getElementById('sidebar1').innerText = "Main"
            document.getElementById('sidebar2').innerText = "About"
            document.getElementById('sidebar3').innerText = "Skills"
            document.getElementById('sidebar4').innerText = "Projects"
            document.getElementById('sidebar5').innerText = "Contact"
            }
        document.getElementById('txt').innerText = "It started with creating my own website for wordpress because I wanted to create a blog about SEO"
        
    }else if(location === "/Skills" && polish === false){
        document.getElementById('kloc-11a').innerText = "At this point, I am learning semantic HTML to make the pages I create more search engine friendly and speed up index."
        document.getElementById('kloc-12a').innerText = "I had the most use of css, because for a long time I styled wordpress templates for myself."
        document.getElementById('kloc-13a').innerText = "In my opinion, I have not mastered the javascript language satisfactorily, but I was able to deal with most of the problems I encountered in a relatively short time."
        document.getElementById('kloc-14a').innerText = "Due to the fact that in many cases we change colors, which was troublesome, I decided to be interested in preprocessors and I chose sass and I use it constantly"
        document.getElementById('kloc-15a').innerText = "I wanted to try what writing code in frameworks looks like and after a hard start I decided to stay with React, because I really liked SPA pages, which provide great comfort of using UX, in short they are very pleasant to use"
        
        if(window.innerWidth > 500){
            document.getElementById('sidebar1').innerText = "Main"
            document.getElementById('sidebar2').innerText = "About"
            document.getElementById('sidebar3').innerText = "Skills"
            document.getElementById('sidebar4').innerText = "Projects"
            document.getElementById('sidebar5').innerText = "Contact"
            }
        
    }else if(location === "/Projects" && polish === false){
        document.getElementById('kloc-ar1').innerText = "I like to create tools that support the development of individuals and enterprises, which is why I create applications as a hobby that make people's lives easier. At the moment, I created the MyWeek application, which saves tasks to be done by saving data in LocalStorage on the phone using Android's WebView. You can indicate whether the tasks of the week have been completed satisfactorily, excellently or not at all. I used HTML, JavaScript and CSS web technologies. Maybe I can also help you in making the world friendlier to people."
        document.getElementById('kloc-ar2').innerText = "I am also in the process of creating a weekly planner in which the user can save tasks to be done in convenient time blocks. The project is still under construction, but on the frontend side it works fine. You can watch a video showing it in action."

        if(window.innerWidth > 500){
            document.getElementById('sidebar1').innerText = "Main"
            document.getElementById('sidebar2').innerText = "About"
            document.getElementById('sidebar3').innerText = "Skills"
            document.getElementById('sidebar4').innerText = "Projects"
            document.getElementById('sidebar5').innerText = "Contact"
            }

        
    }else if(location === "/Contact" && polish === false){
        if(window.innerWidth > 500){
            document.getElementById('sidebar1').innerText = "Main"
            document.getElementById('sidebar2').innerText = "About"
            document.getElementById('sidebar3').innerText = "Skills"
            document.getElementById('sidebar4').innerText = "Projects"
            document.getElementById('sidebar5').innerText = "Contact"
            }
        
        document.getElementById('concon1').innerText = "Phone:"
        document.getElementById('SMS').innerText = "If I don't answer, please send me SMS"
        document.getElementById('concon3').innerText = "e-mail"
    }
        });

    

    

    
  return (
    <div id="bar-btn">
        <button id='btn-pol' onClick={changeLanguage}>POL</button>
        <button id='btn-eng' onClick={changeLanguage2}>ENG</button>
    </div>
  )
  }

