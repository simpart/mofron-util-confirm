const Confirm = require('mofron-comp-confirm');
const ConfArg = mofron.class.ConfArg;
let cfm_event = [() => { console.log("cfm event test"); },undefined];
let confirm = new Confirm({ clickEvent: (c1,c2,c3) => { cfm_event[0](c1,c2,cfm_event[1]); } });

module.exports = {
    show: (msg,evt) => {
        try {
            confirm.text(msg);

            /* set callback for parameter */
            if ('function' === typeof evt) {
	        cfm_event[0] = evt;
	    } else if ((true === Array.isArray(evt)) && ('function' === typeof evt[0])) {
	        cfm_event = evt;
	    }
            
	    let r_chd = mofron.root[0].child();
	    let is_exist = false
	    for (let ridx in r_chd) {
                if (r_chd[ridx].id() === confirm.id()) {
                    is_exist = true;
		    break;
		}
	    }
	    if (false === is_exist) {
                mofron.root[0].child(confirm);
	    }
	    confirm.visible(true);
	} catch (e) {
            console.error(e.stack);
	    throw e;
	}
    },
    size: (wid,hei) => {
        try {
            confirm.width(wid);
	    confirm.height(hei);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    },
    okcancel: (ok, can) => {
        try {
            confirm.okcancel(ok,can);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    },
    config: (cnf) => {
        try {
            confirm.config(cnf);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
};
