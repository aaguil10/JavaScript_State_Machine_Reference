
var pages = {  
    state: undefined,
    states: {
        page1: {
            initialize: function(target) {
                this.target = target;
            },
            enter: function() {
                console.log('setting up page1');
            },
            execute: function() {
                console.log('running page1');
            },
            exit: function() {
                console.log('exiting page1');
            }
        },
        page2: {
            initialize: function(target) {
                this.target = target;
            },
            enter: function() {
                console.log('setting up page2');
                $("#menu_link1").addClass("current_menu_item");
            },
            execute: function() {
                console.log('running page2');
            },
            exit: function() {
                console.log('exiting page2');
                $( "#menu_link1" ).removeClass( "current_menu_item" );
            }
        },
        page3: {
            initialize: function(target) {
                this.target = target;
            },
            enter: function() {
                console.log('setting up page3');
                $("#menu_link2").addClass("current_menu_item");
            },
            execute: function() {
                console.log('running page3');
            },
            exit: function() {
                console.log('exiting page3');
                $( "#menu_link2" ).removeClass( "current_menu_item" );
            }
        },
        page4: {
            initialize: function(target) {
                this.target = target;
            },
            enter: function() {
                console.log('setting up page4');
                $("#menu_link3").addClass("current_menu_item");
            },
            execute: function() {
                console.log('running page4');
            },
            exit: function() {
                console.log('exiting page4');
                $( "#menu_link3" ).removeClass( "current_menu_item" );
            }
        },
        page5: {
            initialize: function(target) {
                this.target = target;
            },
            enter: function() {
                console.log('setting up page5');
                $("#menu_link4").addClass("current_menu_item");
            },
            execute: function() {
                console.log('running page5');
            },
            exit: function() {
                console.log('exiting page5');
                $( "#menu_link4" ).removeClass( "current_menu_item" );
            }
        }
    },
    initialize: function() {
        this.states.page1.initialize(this);
        this.states.page2.initialize(this);
        this.states.page3.initialize(this);
        this.states.page4.initialize(this);
        this.states.page5.initialize(this);
        this.state = this.states.page1;
    },
    changeState: function(state) {
        if (this.state !== state) {
            this.state.exit();
            this.state = state;
            this.state.enter();
            this.state.execute();
        }
    }
};


function inBetween(target, val, offset){
  if( (target - offset) < val && (target + offset) > val){
    return true;
  }
  return false;
}


$( document ).ready(function() {
    pages.initialize();

	$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    
    	
		switch(true) {
		    case inBetween(262, scroll, 262):
		        //console.log("On Home Page: " + scroll);
                pages.changeState(pages.states.page1);
		        break;
		    case inBetween(1641, scroll, 1116):
		        //console.log("On Technology Page: " + scroll);
                pages.changeState(pages.states.page2);
		        break;
		    case inBetween(4057, scroll, 1299):
		        //console.log("On Market Page: " + scroll);
		        pages.changeState(pages.states.page3);
                break;
		    case inBetween(6008, scroll, 652):
		        //console.log("On Career Page: " + scroll);
		        pages.changeState(pages.states.page4);
                break;
            case inBetween(7240, scroll, 579):
                //console.log("On Contact Us Page: " + scroll);
                pages.changeState(pages.states.page5);
                break;
		    default:
		       console.log(scroll);
		}

    
	});
});