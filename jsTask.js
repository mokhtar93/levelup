function checkName(name) {
    if (name.length < 0 || name.length > 24) {
        throw new Error("name length should be between 1 nd 24");
    }
    if (typeof name != "string") {
        throw new Error("name should be of type string");
    }

    const exp = /^([a-zA-Z0-9\s])$/;
    if (exp.test(name.trim()) === false) {
        throw new Error('name should be chars and numbers');
    }
}

function isNumber(number) {
    if (isNaN(version)) {
        throw "input is not a number!";
    }
}

function isPositive(number) {
    if (number < 0) {
        throw "input is not a negative!";
    }
}

function checkDescription(description) {
    if ((typeof description != 'string')) {
        throw new Error("description is not a string!");
    }

    if (description.length < 0) {
        throw new Error("description is too short!");
    }
}

function checkRating(rating) {
    if (rating < 0 || rating > 10) {
        throw "rating is not a valid!";
    }
}

class App {
    constructor(name, description, version, rating) {
        checkName(name);
        isPositive(version);
        isNumber(version);
        checkDescription(description);
        isNumber(rating);
        checkRating(rating);

        this.name = name;
        this.description = description;
        this.version = version;
        this.rating = rating;
    }

    release(options) {

        if (typeof options === "number") {
            isPositive(options);
            if (this.version > options) {
                throw "version is not the latest!";
            } else {
                this.version = options;
            }

        } else {
            if (options.hasOwnProperty('version')) {
                if (version.length < 1) {
                    throw "version is mandtory!";
                }
                isPositive(version);
                isNumber(version);
                this.version = version;
                if (options.hasOwnProperty('description')) {
                    checkDescription(options.description);
                    this.description = options.description;
                }
                if (options.hasOwnProperty('rating')) {
                    checkRating(options.rating);
                    this.rating = options.rating;
                }
            } else {
                throw new Error("version should exist");
            }
        }
    }
}

class Store extends App {


    constructor(name, description, version, rating) {
        super(name, description, version, rating);
        let apps = [];
    }
    search(pattern) {
        let res = this.apps.filter(app => {
            if (app.name.toLowerCase().includes(pattern.toLowerCase())) {
                return true;
            }
        });

        res.sort((a, b) => a.name.localeCompare(b.name));
        return res;
    }

    uploadApp(newApp) {
        let found = false;
        if (app instanceof App) {
            let found = this.apps.findIndex(app => app.name == newApp.name);
            if (found == -1) {
                apps.push(app);
            } else {
                if (this.apps[found].version > newApp.version) {
                    throw new Error("version is not the latest!");
                }
                this.apps[found].version = newApp.version;
                this.apps[found].rating = newApp.rating;
                this.apps[found].description = newApp.description;
            }
        }
    }

    takedownApp(name) {
        let found = this.apps.findIndex(app => app.name == name);
        if (found == -1) {
            throw new Error("app is not found!");
        }
        app.splice(found, 1);
    }


    listMostRecentApps(count = 10) {
        const res = [...this.apps];
        if (res.length >= count) {
            return array.slice(0, count);

        }
        return res;

    }

    listMostPopularApps(count = 10) {
        const res = [...this.apps];
        res.sort(function (a, b) {

            return a.rating - b.rating;
        });
    }
}

class Device {
    constructor(hostName, apps) {
        checkHostName(hostName);
        checkApp(apps);
        this.hostName = hostName;
        this.apps = apps;
        this.stores = this.apps.filter(app => app instanceof Store ? true : false);
    }


    install(appName) {
        let found = this.apps.findIndex(app => app.name.toLowerCase().includes(appName.toLowerCase()));
        if (found == -1) {
            throw new Error('App does not exist');
        }
        this.apps.push(this.stores[found]);
    }

    uninstall(name) {

        const found = this.apps.findIndex(app => app.name.toLowerCase().includes(name.toLowerCase()));
        if (found == -1) {
            throw new Error('app does not exist!');
        }
        this.apps.splice(index, 1);

    }

    listInstalled() {
        return this.apps.sort((first, second) => first.name.localeCompare(second.name));
    }

    checkHostName(hostName) {
        if (hostName.length < 0 || hostName.length > 32) {
            throw "host name is invalid"
        }
    }
}

