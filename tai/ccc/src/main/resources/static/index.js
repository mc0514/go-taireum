var Main = {
    methods: {
        get_host: function () {
            return location.protocol + "//" + location.host;
        },
        NewAccount: function () {
            let url = this.get_host() + "/api/chain/newAccount";
            let postData = {"password": this.NewAccountPassword};

            this.$http.post(url, JSON.stringify(postData)).then(response => {
                console.log(response.body);
                this.NewAccountResult = response.body;
            }, err => {

            });
        },
        initTai: function () {
            let url = this.get_host() + "/api/chain/initTai";
            this.$http.get(url).then(response => {
                console.log(response.body);
                this.initTaiResult = response.body;
            }, err => {

            });
        },
        getAccounts: function () {
            let url = this.get_host() + "/api/chain/getAccounts";
            this.$http.get(url).then(response => {
                console.log(response.body);
                this.AccountsResult = response.body;
            }, err => {

            });
        },
        initGenesisJson: function () {
            let url = this.get_host() + "/api/chain/initGenesis";
            let postData = {
                chainId: this.chainId,
                period: this.period,
                genesisAllocAccount: this.genesisAllocAccount
            };
            this.$http.post(url, JSON.stringify(postData)).then(response => {
                this.initGenesisJsonResult = "initGenesisJsonResult:" + response.body;
            }, err => {

            });
        },
        addGenesisJson: function () {
            let url = this.get_host() + "/api/chain/addGenesis";
            this.$http.post(url, this.genesisJson).then(response => {
                console.log(response.body);
                this.genesisJsonResult = response.body;
            }, err => {

            });
        },
        delGenesisJson: function () {
            let url = this.get_host() + "/api/chain/delGenesis";
            this.$http.get(url).then(response => {
                console.log(response.body);
                this.genesisJsonResult = response.body;
            }, err => {

            });
        },
        startTai: function () {
            if (this.unlockAccount === "" || this.unlockAccountPassword === "" ||
                this.port === "" || this.rpcPort === "") {
                alert("账户地址和密码, port, rpcport不能为空");
                return;
            }
            let url = this.get_host() + "/api/chain/startTai";
            if (this.verbosity === "") {
                this.verbosity = "0";
            }
            let postData = {
                unlockAccount: this.unlockAccount,
                password: this.unlockAccountPassword,
                port: this.port,
                rpcPort: this.rpcPort,
                verbosity: this.verbosity
            };
            this.$http.post(url, JSON.stringify(postData)).then(response => {
                this.startTaiResult = "startTai:" + response.body;
            }, err => {

            });
        },
        stopTai: function () {
            let url = this.get_host() + "/api/chain/stopTai";
            this.$http.get(url).then(response => {
                this.startTaiResult = "stopTai:" + response.body;
            }, err => {

            });
        },
        addMiner: function () {
            let url = this.get_host() + "/api/addMiner";
            this.$http.post(url, this.minerAddress).then(res => {
                this.addResult = res.body;
            }, err => {

            });
        },
        addEnode: function () {
            let url = this.get_host() + "/api/addEnode";
            this.$http.post(url, this.enodeAddress).then(res => {
                this.addResult = res.body;
            }, err => {

            });
        },
        addContract: function () {
            let url = this.get_host() + "/api/addContract";
            this.$http.post(url, this.contractAddress).then(res => {
                this.addResult = res.body;
            }, err => {

            });
        },
        getMiner: function () {
            let url = this.get_host() + "/api/getMiner";
            this.$http.get(url).then(response => {
                this.getResult = response.body;
            }, err => {

            });
        },
        getEnode: function () {
            let url = this.get_host() + "/api/getEnode";
            this.$http.get(url).then(response => {
                this.getResult = response.body;
            }, err => {

            });
        },
        getContract: function () {
            let url = this.get_host() + "/api/getContract";
            this.$http.get(url).then(response => {
                this.getResult = response.body;
            }, err => {

            });
        },
        delMiner: function () {
            let url = this.get_host() + "/api/delMiner";
            this.$http.get(url).then(response => {
                this.getResult = response.body;
            }, err => {

            });
        },
        delEnode: function () {
            let url = this.get_host() + "/api/delEnode";
            this.$http.get(url).then(response => {
                this.getResult = response.body;
            }, err => {

            });
        },
        delContract: function () {
            let url = this.get_host() + "/api/delContract";
            this.$http.get(url).then(response => {
                this.getResult = response.body;
            }, err => {

            });
        },
        addPeer: function () {
            let url = this.get_host() + "/api/admin/addPeer";
            this.$http.post(url, this.addPeerAddress).then(res => {
                this.enodeResult = res.body;
            }, err => {

            });
        },
        getOwnenode: function () {
            let url = this.get_host() + "/api/admin/getOwnenode";
            this.$http.get(url).then(res => {
                this.enodeResult = res.bodyText;
            }, err => {

            });
        },
        initAllInOne: function () {
            //newAccount
            //addGenesis.json
            //initTai
            //addMiner
            //startTai
            //addEnode
            //getOwnEnode
        },
        addPeerAllInOne: function () {

        },
        deployCCC: function () {
            let url = this.get_host() + "/api/Union/deployCCC";
            let postData = {
                companyName: this.companyName,
                email: this.email,
                remark: this.remark,
                enode: this.enode
            };
            this.$http.post(url, JSON.stringify(postData)).then(response => {
                this.deployResult = response.bodyText;
            }, err => {

            });
        },
        loadCCC: function () {
            let url = this.get_host() + "/api/Union/loadCCC";
            let postData = {
                contractAddress: this.contractAddress
            };
            this.$http.post(url, JSON.stringify(postData)).then(response => {
                this.deployResult = response.bodyText;
            }, err => {

            });
        },
        applyMember: function () {
            let url = this.get_host() + "/api/Union/applyMember";
            let postData = {
                companyName: this.companyName2,
                email: this.email2,
                remark: this.remark2,
                enode: this.enode2,
                account: this.account2
            };
            this.$http.post(url, JSON.stringify(postData)).then(response => {
                this.applyResult = response.bodyText;
            }, err => {

            });
        },
        showCompanyNum: function () {
            let url = this.get_host() + "/api/Union/showCompanyNum";
            this.$http.get(url).then(res => {
                this.showCompanyNumResult = res.bodyText;
            }, err => {

            });
        },
        updateTableData: function () {
            let url = this.get_host() + "/api/Union/showAllCompany";
            this.$http.get(url).then(res => {
                let newdata = [];
                let companys = JSON.parse(res.bodyText);
                console.log(res.bodyText);

                for (let index in companys) {
                    let mapCompany = JSON.parse(companys[index]);
                    newdata.push(mapCompany);
                }
                this.tableData = newdata;

            }, err => {

            });
        },
        ShowAllCompany: function () {
            this.updateTableData();
        },
        voteMember: function () {
            let url = this.get_host() + "/api/Union/VoteMember?fromid=" + this.fromID + "&toid=" + this.toID;
            this.$http.get(url).then(res => {
                this.voteResult = "voteMember:" + res.bodyText;
            }, err => {

            });
        },
        voteMine: function () {
            let url = this.get_host() + "/api/Union/VoteMine?fromid=" + this.fromID + "&toid=" + this.toID;
            this.$http.get(url).then(res => {
                this.voteResult = "voteMine:" + res.bodyText;
            }, err => {

            });
        },
        showBallot: function () {
            let url = this.get_host() + "/api/Union/ShowBallot?id=" + this.companyId;
            this.$http.get(url).then(res => {
                this.ballotNumResult = "showBallot:" + res.bodyText;
            }, err => {

            });
        },
        showBallotMine: function () {
            let url = this.get_host() + "/api/Union/ShowBallotMine?id=" + this.companyId;
            this.$http.get(url).then(res => {
                this.ballotNumResult = "showBallotMine:" + res.bodyText;
            }, err => {

            });
        },
        isMember: function () {
            let url = this.get_host() + "/api/Union/isMember?id=" + this.companyId;
            this.$http.get(url).then(res => {
                this.ballotNumResult = "isMember:" + res.bodyText;
            }, err => {

            });
        },
        isMemberMine: function () {
            let url = this.get_host() + "/api/Union/isMemberMine?id=" + this.companyId;
            this.$http.get(url).then(res => {
                this.ballotNumResult = "isMemberMine:" + res.bodyText;
            }, err => {

            });
        },
        transfer: function () {
            let url = this.get_host() + "/api/Union/transfer?toAccount=" + this.transferToAccount + "&amount=" + this.transferAmount;
            this.$http.get(url).then(res => {
                this.transferResult = "transfer:" + res.bodyText;
            }, err => {

            });
        }
    },
    data: function () {
        return {
            genesisJson: "",
            tableData: [],
            NewAccountPassword: "",
            NewAccountResult: "",
            chainId: "",
            period: "",
            genesisAllocAccount: "",
            initGenesisJsonResult: "",
            initTaiResult: "",
            AccountsResult: "",
            genesisJsonResult: "",
            unlockAccount: "",
            unlockAccountPassword: "",
            port: "",
            rpcPort: "",
            verbosity: "",
            getResult: "",
            startTaiResult: "",
            addResult: "",
            minerAddress: "",
            enodeAddress: "",
            contractAddress: "",
            addPeerAddress: "",
            enodeResult: "",
            enodeResult_AllInOne: "",
            addPeer_AllInOne: "",
            companyName: "",
            email: "",
            remark: "",
            enode: "",
            deployResult: "",
            companyName2: "",
            email2: "",
            remark2: "",
            enode2: "",
            account2: "",
            applyResult: "",
            showCompanyNumResult: "",
            fromID:"",
            toID:"",
            voteResult:"",
            companyId:"",
            ballotNumResult:"",
            transferToAccount:"",
            transferAmount:"",
            transferResult:""
        };
    }
};

var Ctor = Vue.extend(Main);
new Ctor().$mount('#app');
