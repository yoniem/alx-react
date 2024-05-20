import $ from 'jquery';
import _ from 'lodash';
import '../body/body.css';

function updateCounter() {
    let count = 0;
    return function () {
        count += 1;
        $('#count').text(`${count} clicks on the button`);
    };
}

const counter = updateCounter();

$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');

$('button').on('click', _.debounce(counter, 500));
