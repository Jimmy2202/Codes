package com.example.myapplicationav2pt1;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

public class Tela3 extends AppCompatActivity {
    EditText populacao,idh,cidade,estado;
    SharedPreferences prefs, prefs2;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_tela3);
        populacao = findViewById(R.id.editTextText15);
        idh = findViewById(R.id.editTextText16);
        cidade = findViewById(R.id.editTextText17);
        estado = findViewById(R.id.editTextText18);
        populacao.setText(getIntent().getExtras().getString("float1"));
        idh.setText(getIntent().getExtras().getString("float2"));
        prefs = getSharedPreferences("dadosCidade", Context.MODE_PRIVATE);
        prefs2 = getSharedPreferences("dadosTela3", Context.MODE_PRIVATE);
        IniciarDadosCidade();
    }

    @Override
    protected void onPause() {
        super.onPause();
        save();
    }

    @Override
    protected void onResume() {
        super.onResume();
        populacao.setText(getIntent().getExtras().getString("float1"));
        idh.setText(getIntent().getExtras().getString("float2"));
    }

    public void resgatar(View v){
        cidade.setText(prefs.getString("nome", "default"));
        estado.setText(prefs.getString("estado", "default"));
    }

    protected void save(){
        SharedPreferences.Editor prefCidade = prefs2.edit();
        prefCidade.putString("cidade", cidade.getText().toString());
        prefCidade.putString("estado", estado.getText().toString());
        prefCidade.putFloat("populacao", Float.parseFloat(populacao.getText().toString()));
        prefCidade.putFloat("idh", Float.parseFloat(idh.getText().toString()));
        prefCidade.commit();
        Toast.makeText(getApplicationContext(),
                "PREFERENCIAS DA TELA 3 SALVAS COM SUCESSO", Toast.LENGTH_LONG).show();
    }

    private void IniciarDadosCidade() {
        if (prefs2.contains("cidade"))
            cidade.setText(prefs.getString("cidade", "Nome:?"));
        if (prefs2.contains("estado"))
            estado.setText(prefs.getString("estado", "Estado:?"));
        if (prefs2.contains("populacao"))
            populacao.setText(String.valueOf(prefs.getFloat("populacao", 0.0f)));
        if (prefs2.contains("idh"))
            idh.setText(String.valueOf(prefs.getFloat("idh", 0.0f)));
    }

    public void voltar(View v){
        String idh_result;
        float idh_data = Float.parseFloat(idh.getText().toString());
        float pop_data = Float.parseFloat(populacao.getText().toString());
        if(idh_data > 0.8)
            idh_result = "muito alto";
        else if(idh_data > 0.7 && idh_data < 0.8)
            idh_result = "alto";
        else if(idh_data > 0.55 && idh_data < 0.699)
            idh_result = "moderado";
        else
            idh_result = "baixo";

        String mensagem = "A cidade " + prefs.getString("nome", "default") + " tem uma população de\n" + pop_data + " pessoas " + "e seu IDH é " + idh_result;
        Intent returnintent = new Intent();
        returnintent.putExtra("resp", mensagem);
        setResult(RESULT_OK, returnintent);
        finish();
    }
}