<?php
require_once ('model/rankModel.php');
?>

<?php require_once 'components/header.php'; ?>

<div id="rankView" class="wrapper">

    <h1>Classement</h1>

    <table>
    <tr class="main-title-table">
        <th>Classement</th>
        <th>Joueur</th>
        <th>Score</th>
    </tr>

        <?php
            $i =0;
            foreach ($allPlayer as $onePlayer){
                $i++;
                echo "<tr>";
                    echo "<td> $i </td>";
                    echo"<td>$onePlayer[pseudo]</td>";
                    echo"<td>$onePlayer[score]</td>";
                echo"</tr>";
            }
        ?>


    </table>
</div>

<?php require_once 'components/footer.php'; ?>