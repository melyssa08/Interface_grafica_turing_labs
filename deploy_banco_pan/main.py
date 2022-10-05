# Instalar o pip dos quatro
from flask import Flask
import pandas as pd
from joblib import load
from sklearn.ensemble import RandomForestClassifier
from flask_cors import CORS, cross_origin

# Carregar o modelo
model = load("modelo_oficial")

# Instanciar o Flask
app = Flask(__name__)
CORS(app)

# A rota com os parametros que serão utilizados para a predição
@app.route("/<credito>/<saldo>/<atendimento_atrasado>/<produtos>/<atendimento>/<operacoes>/<reclamacoes>/<engajado>")
def index(credito,saldo, atendimento_atrasado,produtos, atendimento,operacoes, reclamacoes, engajado):
# A predição com os argumentos dados
    lista = model.predict(pd.DataFrame({'vlr_credito':[credito],
                            'vlr_saldo':[saldo],
                            'num_atend_atrs':[atendimento_atrasado],
                            'num_produtos':[produtos],
                            'num_atend':[atendimento],
                            'qtd_oper':[operacoes],
                            'qtd_reclm':[reclamacoes],
                            'ind_engaj':[engajado]}).head(1)).tolist()
# Resultado em lista com indice
    return str(lista[0])

# Rodando a aplicação   
if __name__ == "__main__":
    app.run(debug=True)