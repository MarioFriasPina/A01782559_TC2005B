using System.Collections;
using System.Collections.Generic;
using UnityEngine;

/*
Andrea Alexandra Barrón Córdova
Mario Ignacio Frías Piña
Oswaldo Ilhuicatzi Mendizábal
*/

public class EnemyMaker : MonoBehaviour
{
    [Tooltip("Prefab del enemigo a crear")]
    [SerializeField] GameObject enemy;
    [Tooltip("Tiempo que tarda en crear cada enemigo")]
    public float time_between;


    [Header("Possible Sprites")]
    [SerializeField] Sprite s1;
    [SerializeField] Sprite s2;
    [SerializeField] Sprite s3;
    [SerializeField] Sprite s4;
    [SerializeField] Sprite s5;
    [SerializeField] Sprite s6;



    private bool stop_spawn;

    // Start is called before the first frame update
    void Start()
    {
        stop_spawn = false;
        StartCoroutine(myWaitCoroutine());
    }

    //Dejar de crear objetos
    public void stop()
    {
        stop_spawn = true;
        StopCoroutine(myWaitCoroutine());
        
        GameObject[] gameObjects = GameObject.FindGameObjectsWithTag ("Enemy");
        
        for(var i = 0 ; i < gameObjects.Length ; i ++)
        {
            Destroy(gameObjects[i]);
        }
    }

    /// <summary>
    /// Regresa un vector3, con una posicion en el perimetro de un rectangulo
    /// </summary>
    Vector3 randomPointRect(float min_x, float max_x, float min_y, float max_y) {
        Vector3 pos;
        float x;
        float y;


        if (Random.value > 0.5f)
        {
            if (Random.value > 0.5f)
                y = max_y;
            else
                y = min_y;
            x = Random.Range(min_x, max_x);
        }
        else
        {
            if (Random.value > 0.5f)
                x = max_x;
            else
                x = min_x;
            y = Random.Range(min_y, max_y);
        }

        pos = new Vector3(x, y, 0);
        return pos;
    }

    /// <summary>
    /// Una subrutina paralela a la ejecucion que crea un nuevo objeto cada determinado tiempo
    /// </summary>
    IEnumerator myWaitCoroutine()
    {
        GameObject each;
        int type;

        while (!stop_spawn)
        {
            //Wait every time_between seconds
            yield return new WaitForSeconds(time_between);

            each = Instantiate(enemy, randomPointRect(-15, 15, -10, 10), Quaternion.identity);

            type = (int)Random.Range(1, 7);

            switch(type)
            {
                case 1:
                    each.GetComponent<SpriteRenderer>().sprite = s1;
                    break;
                case 2:
                    each.GetComponent<SpriteRenderer>().sprite = s2;
                    break;
                case 3:
                    each.GetComponent<SpriteRenderer>().sprite = s3;
                    break;
                case 4:
                    each.GetComponent<SpriteRenderer>().sprite = s4;
                    break;
                case 5:
                    each.GetComponent<SpriteRenderer>().sprite = s5;
                    break;
                case 6:
                    each.GetComponent<SpriteRenderer>().sprite = s6;
                    break;
            }
        }
        GameObject[] gameObjects = GameObject.FindGameObjectsWithTag ("Enemy");
        
        for(var i = 0 ; i < gameObjects.Length ; i ++)
        {
            Destroy(gameObjects[i]);
        }

    }

    // Update is called once per frame
    void Update()
    {
    }
}
