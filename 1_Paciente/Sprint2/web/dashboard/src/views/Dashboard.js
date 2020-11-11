/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Coded by Creative Tim
* Modified by Aline Rodrigues
* Data: 04-10-2020

=========================================================

*/
import React, {Component} from "react";
import Select from 'react-select';

// react plugin used to create charts
import { Line, Bar, Doughnut } from "react-chartjs-2";

import api from "../services/apimock/index";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

// core components
import {
  optionsTemp,
  optionsStatus,
  optionsBarTemp,
  optionsEmer
} from "variables/options.js";

//const colors = ['#1f8ef1', '#00d6b4', '#ff8d72', '#e30000', '#0013e3', '#8932a8', '#f2ff00'];
const colors = ['#1EC3F7', '#1A77D6', '#2856ED', '#201AD6', '#601EF7'];
const months = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartLineTemperature: { labels: [], datasets: [], },
      chartBarTemperature: { labels: [], datasets: [], },
      chartStatus: { labels: [], datasets: [], },
      chartEmergencies: { labels: [], datasets: [], },
      tablePersons : [],
      tableEmergencies: [],
      totalEmergencies: 0,
      selectedPersons: [],
      persons: [],
      isLoading : true,
    };
  }
  setBgChartData = name => {
    this.setState({
      bigChartData: name
    });
  };

  componentDidMount() {
    this.loadPersons(true);
    setInterval(() => { this.loadDashboard(this.state.selectedPersons)}, 120000);
  }
 
  loadPersons = inicial => {
    api.get_persons().then(result => {
      result.forEach((element) => {
        element['label'] = element.per_name;
        element['value'] = element.hos_per_id; 
      });

      this.setState({persons: result});
      this.setState({selectedPersons: result});

      if (inicial) {
        this.loadDashboard(result);
      }
    });
  }

  createChartsExoesqueleto = (data, persons) => {
    // Draw Line Charts
    let labels        = [];
    let datasetsTemp  = [];
    let datasetsSatus = [];
    let indexColor = 0;

    persons.forEach((element) => {
      datasetsTemp.push({
          label: element.label.substring(0, 20)+'...',
          fill: true,
          borderColor: colors[indexColor],
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: colors[indexColor],
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: colors[indexColor],
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 3,
          data: [],
          id: element.value,
        });
        datasetsSatus.push({
          label: element.label.substring(0, 20)+'...',
          showLine: true,
          fill: true,
          borderColor: colors[indexColor],
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: colors[indexColor],
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: colors[indexColor],
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 3,
          data: [],
          id: element.value,
        });
        indexColor += 1;
    })
    data.forEach((element) => {
      let date = new Date(element.data_hora);
      let label = date.getDay()+' '+months[date.getMonth()]+' '+date.getHours()+':00';
      let indexLabel = labels.indexOf(label);
      if (indexLabel <= -1) {
        labels.push(label);
        indexLabel = labels.length-1;
        datasetsTemp.forEach((e) => {
          e.data.push(null);
        });
        datasetsSatus.forEach((e) => {
          e.data.push(null);
        })
      }
      datasetsTemp.forEach((e) => {
        if (e.id === element.hos_per_id) {
          e.data[indexLabel] = element.temperatura;
        }
      })
      datasetsSatus.forEach((e) => {
        if (e.id === element.hos_per_id) {
          e.data[indexLabel] = element.status;
        }
      })
    });
    this.setState({chartLineTemperature : {labels, datasets: datasetsTemp}});
    this.setState({chartStatus : {labels, datasets: datasetsSatus}});

    // Draw Bar Chart
    labels = [];
    persons.forEach((element) => {
      labels.push(element.label.substring(0, 20)+'...');
    })

    let datasetsBarTemp = [
      {
        label: "Média",
        fill: true,
        borderWidth: 0,
        borderDash: [],
        borderDashOffset: 0.0,
        data: [],
        backgroundColor: colors,
			  hoverBackgroundColor: colors
      }
    ];

    datasetsTemp.forEach((element) => {
      datasetsBarTemp[0].data.push(element.data.reduce((a, b) => a + b, 0) / element.data.length)
    });

    this.setState({chartBarTemperature : {labels, datasets: datasetsBarTemp}});
  }

  createChartEmergencies = (data, persons) => {
    let labels = [];
    let datasetsBarEmer = [
      {
        label: "Total",
        fill: false,
        borderWidth: 0,
        borderDash: [],
        borderDashOffset: 0.0,
        data: [],
        backgroundColor: colors,
			  hoverBackgroundColor: colors
      }
    ];

    persons.forEach((element) => {
      labels.push(element.label.substring(0, 20)+'...');
      let total = data.reduce((sum, d) => {
        if (element.value === d.hos_per_id) {
          sum = sum + 1;
        }
        return sum
      }, 0);
      datasetsBarEmer[0].data.push(total);
    })

    this.setState({chartEmergencies : {labels, datasets: datasetsBarEmer}, totalEmergencies: data.length});
  }

  loadDashboard = selectedPersons => {
    this.setState({isLoading: true});
    let persons = [];
    let tablePersons = [];
    selectedPersons.forEach((element) => {
      persons.push(element.value); 
    });

    api.get_exoesqueleto(persons).then(result => {
      this.createChartsExoesqueleto(result, selectedPersons);

      api.get_emergencies(persons).then(result => {
        this.createChartEmergencies(result, selectedPersons);
        this.setState({tableEmergencies: result});
        this.setState({isLoading: false});
      });
    });

    this.state.persons.forEach((element) => {
      if (persons.indexOf(element.hos_per_id) >= 0) {
        tablePersons.push(element);
      }
    })
    this.setState({tablePersons});
  }

  handleChange = (selectedPersons) => {
    if (selectedPersons === null) selectedPersons = [];
    this.setState({selectedPersons});
    this.loadDashboard(selectedPersons);
  };

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col xs="12">
              <Card className="card-select">
                <CardHeader>
                  <Row>
                    <Col className="text-left" sm="12">
                      <CardTitle tag="h3">Pacientes</CardTitle>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Select
                    closeMenuOnSelect={false}
                    defaultValue={this.state.persons}
                    isMulti
                    label="Selecione os pacientes"
                    name="Pacientes"
                    options={this.state.persons}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={this.handleChange}
                    isLoading={this.state.isLoading}
                  />
                </CardBody>
              </Card>
            </Col>
            <Col xs="12">
              <Card className="card-chart">
                <CardHeader>
                  <Row>
                    <Col className="text-left" sm="12">
                      <h5 className="card-category">Componente Exoesqueleto</h5>
                      <CardTitle tag="h2">
                        <i className="tim-icons icon-sound-wave text-info" />{" "}
                        Temperatura Celsius (Cº)
                      </CardTitle>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={this.state.chartLineTemperature}
                      options={optionsTemp}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="12">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Componente Exoesqueleto</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-sound-wave text-info" />{" "}
                    Status (ABERTO/FECHADO)
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={this.state.chartStatus}
                      options={optionsStatus}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="6">
            <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Componente Exoesqueleto</h5>
                  <CardTitle tag="h3">
                  <i className="tim-icons icon-sound-wave text-info" />{" "}
                    Média Temperatura Celsius (Cº)
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Bar
                      data={this.state.chartBarTemperature}
                      options={optionsBarTemp}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Emergências Acionadas</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-alert-circle-exc text-info" />{" "}
                        Emergencias:{" "}{this.state.totalEmergencies}
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Doughnut
                      data={this.state.chartEmergencies}
                      options={optionsEmer}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
          <Col lg="6" md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Pacientes</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Nome</th>
                        <th className="text-center">CPF</th>
                        <th className="text-center">Cidade</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.tablePersons.map(person => (
                        <tr key={person.hos_per_id}>
                          <td>{person.per_name}</td>
                          <td className="text-center">{person.per_cpf}</td>
                          <td className="text-center">{person.add_city}</td>
                      </tr>
                      ))}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6" md="12">
              <Card className="card-tasks">
                <CardHeader>
                  <CardTitle tag="h4">Emergências</CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="table-full-width table-responsive">
                    <Table>
                      <tbody>
                        {this.state.tableEmergencies.map(emergency => (
                          <tr>
                            <td>
                              <i className="tim-icons icon-alert-circle-exc text-info" />
                            </td>
                            <td>
                              <p className="title">{new Date(emergency.data_hora).toLocaleString().substring(0, 16)}</p>
                              <p className="text-muted">
                                Mensagem: {emergency.mensagem}
                              </p>
                              <p className="text-muted">
                                Paciente: {emergency.per_name}
                              </p>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Dashboard;
