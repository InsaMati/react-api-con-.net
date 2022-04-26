import { Field, Form, Formik } from "formik";
import { generoDTO } from "../Generos/generos.d.model";
import Button from "../Utils/Button";

export default function FiltroPeliculas() {
  const valorInicial: filtroPeliculasForm = {
    titulo: "",
    generoId: 0,
    proximosEstrenos: false,
    enCines: false,
  };

  const generos: generoDTO[] = [
    { id: 1, nombre: "accion" },
    { id: 2, nombre: "comedia" },
  ];

  return (
    <>
      <h3>Filtrar Peliculas</h3>
      <Formik
        initialValues={valorInicial}
        onSubmit={(valores) => console.log(valores)}
      >
        {(formikProps) => (
          <Form>
            
            <div className="row">
              <div className="col-md-2">
                <input
                  type="text"
                  className="form-control"
                  id="titulo"
                  placeholder="Título de la película"
                  {...formikProps.getFieldProps("titulo")}
                />
              </div>
              <div className="col-md-2">
                <select
                  className="form-select"
                  {...formikProps.getFieldProps("generoId")}
                >
                  <option value="0">--Seleccione un género--</option>
                  {generos.map((genero) => (
                    <option key={genero.id} value={genero.id}>
                      {genero.nombre}
                    </option>
                  ))}
                </select> 
              </div>
              <div className="col-2">
                <Field
                  className="form-check-input"
                  id="proximosEstrenos"
                  name="proximosEstrenos"
                  type="checkbox"
                />
                <label className="form-check-label" htmlFor="proximosEstrenos">
                  Próximos Estrenos
                </label>
                <br></br>
                <Field
                  className="form-check-input"
                  id="enCines"
                  name="enCines"
                  type="checkbox"
                />
                <label className="form-check-label" htmlFor="enCines">
                  En Cines
                </label>
              </div>
              <div className="col-md-4">
              <Button
                className="btn btn-primary"
                onClick={() => formikProps.submitForm()}
              >
                Filtrar
              </Button>
              <Button
                className="btn btn-danger"
                onClick={() => formikProps.setValues(valorInicial)}
              >
                Limpiar
              </Button>
              </div>
              </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

interface filtroPeliculasForm {
  titulo: string;
  generoId: number;
  proximosEstrenos: boolean;
  enCines: boolean;
}
