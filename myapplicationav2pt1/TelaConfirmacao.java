package com.example.myapplicationav2pt1;

import androidx.appcompat.app.AppCompatActivity;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

public class TelaConfirmacao extends AppCompatActivity {
    EditText edcity, edstate, edpop,edidh, message;
    Intent intent;
    SharedPreferences prefs;
    static final int ACTIVITY_REQUEST_MESSAGE = 1;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_tela_confirmacao);
        edcity = findViewById(R.id.editTextText8);
        edstate = findViewById(R.id.editTextText11);
        edpop = findViewById(R.id.editTextText12);
        edidh = findViewById(R.id.editTextText13);
        message = findViewById(R.id.editTextText14);

        edcity.setText(getIntent().getExtras().getString("valor1"));
        edstate.setText(getIntent().getExtras().getString("valor2"));
        edpop.setText(getIntent().getExtras().getString("float1"));
        edidh.setText(getIntent().getExtras().getString("float2"));
        prefs = getSharedPreferences("dadosTelaConfirmacao", Context.MODE_PRIVATE);
        IniciarDadosCidade();
    }

    public void confirma_dados(View v){
        float populacao = Float.parseFloat(edpop.getText().toString());
        float idh = Float.parseFloat(edidh.getText().toString());
        intent = new Intent(getApplicationContext(), Tela3.class);
        intent.putExtra("float1", String.valueOf(populacao));
        intent.putExtra("float2", String.valueOf(idh));
        startActivityForResult(intent, ACTIVITY_REQUEST_MESSAGE);
    }

    @Override
    protected void onPause() {
        super.onPause();
        save();
    }

    @Override
    protected void onResume() {
        super.onResume();
        edcity.setText(getIntent().getExtras().getString("valor1"));
        edstate.setText(getIntent().getExtras().getString("valor2"));
        edpop.setText(getIntent().getExtras().getString("float1"));
        edidh.setText(getIntent().getExtras().getString("float2"));
    }

    protected void save(){
        SharedPreferences.Editor prefCidade = prefs.edit();
        prefCidade.putString("mensagem", message.getText().toString());
        prefCidade.putString("cidade", edcity.getText().toString());
        prefCidade.putString("estado", edstate.getText().toString());
        prefCidade.putFloat("populacao", Float.parseFloat(edpop.getText().toString()));
        prefCidade.putFloat("idh", Float.parseFloat(edidh.getText().toString()));
        prefCidade.commit();
        Toast.makeText(getApplicationContext(),
                "PREFERENCIAS DA TELA 2 SALVAS COM SUCESSO", Toast.LENGTH_LONG).show();
    }

    private void IniciarDadosCidade() {
        if (prefs.contains("cidade"))
            edcity.setText(prefs.getString("cidade", "Nome:?"));
        if (prefs.contains("estado"))
            edstate.setText(prefs.getString("estado", "Estado:?"));
        if (prefs.contains("populacao"))
            edpop.setText(String.valueOf(prefs.getFloat("populacao", 0.0f)));
        if (prefs.contains("idh"))
            edidh.setText(String.valueOf(prefs.getFloat("idh", 0.0f)));
        if (prefs.contains("mensagem"))
            message.setText(prefs.getString("mensagem", "Nome:?"));
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if(requestCode == ACTIVITY_REQUEST_MESSAGE && resultCode == RESULT_OK){
            String retorno = data.getStringExtra("resp");
            message.setText(retorno);
            save();
        }
    }
}