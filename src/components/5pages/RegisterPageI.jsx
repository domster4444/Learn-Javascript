import React from 'react';
import { useEffect } from 'react';
import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';
const RegisterPageI = () => {
  useEffect(() => {
    function autocomplete(inp, arr) {
      /*the autocomplete function takes two arguments,
      the text field element and an array of possible autocompleted values:*/
      var currentFocus;
      /*execute a function when someone writes in the text field:*/
      inp.addEventListener('input', function (e) {
        var a,
          b,
          i,
          val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) {
          return false;
        }
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement('DIV');
        a.setAttribute('id', this.id + 'autocomplete-list');
        a.setAttribute('class', 'autocomplete-items');
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          var pos = arr[i].toUpperCase().indexOf(val.toUpperCase());
          /*check if the item starts with the same letters as the text field value:*/
          if (pos > -1) {
            /*create a DIV element for each matching element:*/
            b = document.createElement('DIV');
            /*make the matching letters bold:*/
            b.innerHTML = arr[i].substr(0, pos);
            b.innerHTML +=
              '<strong>' + arr[i].substr(pos, val.length) + '</strong>';
            b.innerHTML += arr[i].substr(pos + val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
            b.addEventListener('click', function (e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName('input')[0].value;
              /*close the list of autocompleted values,
                  (or any other open lists of autocompleted values:*/
              closeAllLists();
            });
            a.appendChild(b);
          }
        }
      });
      /*execute a function presses a key on the keyboard:*/
      inp.addEventListener('keydown', function (e) {
        var x = document.getElementById(this.id + 'autocomplete-list');
        if (x) x = x.getElementsByTagName('div');
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) {
          //up
          /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
      });
      function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = x.length - 1;
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add('autocomplete-active');
      }
      function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
          x[i].classList.remove('autocomplete-active');
        }
      }
      function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName('autocomplete-items');
        for (var i = 0; i < x.length; i++) {
          if (elmnt != x[i] && elmnt != inp) {
            x[i].parentNode.removeChild(x[i]);
          }
        }
      }
      /*execute a function when someone clicks in the document:*/
      document.addEventListener('click', function (e) {
        closeAllLists(e.target);
      });
    }

    /*An array containing all the country names in the world:*/
    var countries = [
      'Achham',
      'Arghakhanchi',
      'Baglung',
      'Baitadi',
      'Bajhang',
      'Bajura',
      'Banke',
      'Bara',
      'Bardiya',
      'Bhaktapur',
      'Bhojpur',
      'Chitwan',
      'Dadeldhura',
      'Dailekh',
      'Dang',
      'Darchula',
      'Dhading',
      'Dhankuta',
      'Dhanusha',
      'Dolakha',
      'Dolpa',
      'Doti',
      'Eastern Rukum',
      'Gorkha',
      'Gulmi',
      'Humla',
      'Ilam',
      'Jajarkot',
      'Jhapa',
      'Jumla',
      'Kailali',
      'Kalikot',
      'Kanchanpur',
      'Kapilvastu',
      'Kaski',
      'Kathmandu',
      'Kavrepalanchok',
      'Khotang',
      'Lalitpur',
      'Lamjung',
      'Mahottari',
      'Makwanpur',
      'Manang',
      'Morang',
      'Mugu',
      'Mustang',
      'Myagdi',
      'Nawalpur',
      'Nuwakot',
      'Okhaldhunga',
      'Palpa',
      'Panchthar',
      'Parasi',
      'Parbat',
      'Parsa',
      'Pyuthan',
      'Ramechhap',
      'Rasuwa',
      'Rautahat',
      'Rolpa',
      'Rupandehi',
      'Salyan',
      'Sankhuwasabha',
      'Saptari',
      'Sarlahi',
      'Sindhuli',
      'Sindhupalchowk',
      'Siraha',
      'Solukhumbu',
      'Sunsari',
      'Surkhet',
      'Syangja',
      'Tanahun',
      'Taplejung',
      'Tehrathum',
      'Udayapur',
      'Western Rukum',
    ];

    /*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
    autocomplete(document.getElementById('myInput'), countries);
  }, []);

  return (
    <>
      <div className="containerCenter">
        <div className="contentBlock">
          <main id="RegisterPageI">
            <div id="rightDivision">
              <section id="formContainer">
                <h1 className="poppins_medium_500">
                  Let's protect yourself and those <br /> around you by
                  vaccinating{' '}
                </h1>

                {/* _______________________hospital name  */}
                <label
                  id="defaultFormLable"
                  className="poppins_semibold_600"
                  htmlFor="default-radio"
                >
                  Hospital Name
                </label>

                <Form.Control type="text" placeholder="Enter hospital name" />
                {/* ___________________hospitla email */}
                <label
                  id="defaultFormLable"
                  className="poppins_semibold_600"
                  htmlFor="default-radio"
                >
                  Hospital Email
                </label>

                <Form.Control type="email" placeholder="Enter hospital email" />

                {/* ___________________hospital password field */}
                <label
                  id="defaultFormLable"
                  className="poppins_semibold_600"
                  htmlFor="default-radio"
                >
                  Hospital Password
                </label>

                <Form.Control type="password" placeholder="Enter password" />
                {/* ___________________third */}
                <label
                  id="defaultFormLable"
                  className="poppins_semibold_600"
                  htmlFor="default-radio"
                >
                  Confirm Password
                </label>
                {/* ___________________confirm password */}
                <label
                  id="defaultFormLable"
                  className="poppins_semibold_600"
                  htmlFor="default-radio"
                >
                  Licence Key
                </label>

                <Form.Control type="password" placeholder="Confirm password" />
                {/* ___________________hospital licence key */}
                <label
                  id="defaultFormLable"
                  className="poppins_semibold_600"
                  htmlFor="default-radio"
                >
                  Licence Key
                </label>

                <Form.Control type="text" placeholder="Enter email" />

                {/* -------------hospital district field */}
                <label
                  id="defaultFormLable"
                  className="poppins_semibold_600"
                  htmlFor="default-radio"
                >
                  Hospital District
                </label>

                {/* <!--Make sure the form has the autocomplete function switched off:--> */}
                <form autocomplete="off" action="/action_page.php" />
                <div class="autocomplete" style={{ width: '300px' }} />

                <Form.Control
                  id="myInput"
                  type="text"
                  placeholder="Enter hospital district"
                />
              </section>

              <div className="formSubmitContainer">
                <Button variant="primary" type="submit">
                  Register
                </Button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default RegisterPageI;
