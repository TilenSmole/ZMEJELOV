<?php
include("database.php");

$commentsPerPage = 7;
$page = isset($_GET['page']) ? $_GET['page'] : 1;
$type = isset($_GET['type']) ? $_GET['type'] : 2; // Default type if not provided
$offset = ($page - 1) * $commentsPerPage;

$sql = "
WITH PaginationCTE AS (
    SELECT *, ROW_NUMBER() OVER (ORDER BY date DESC) AS RowNum
    FROM comments
    WHERE type = ?
)
SELECT *
FROM PaginationCTE
WHERE RowNum BETWEEN ? AND ?";

$stmt = sqlsrv_prepare($conn, $sql, array($type, $offset + 1, $offset + $commentsPerPage));

if ($stmt && sqlsrv_execute($stmt)) {
    while ($row = sqlsrv_fetch_array($stmt, SQLSRV_FETCH_ASSOC)) {
        echo '<div class="full_comment">
                <span class="commentAuthor"> 
                  <img src="assets/lvl2/Wraith_03_Idle_006.png" alt="Zmeja" style="width: 40px; height: 50px; background-color: #605966; border-radius: 100%;">
                  <a href="user.php?user=' . urlencode($row["user"]) . '">' . $row["user"] . '</a>
                </span>
                <span class="commentText"><br>' . $row["comment"] . '</span><br><br>
                <span class="commentDate"><br>' . $row["date"]->format('d-m-Y') . '</span>
              </div><br><br>';
    }
} else {
    echo "Error: " . print_r(sqlsrv_errors(), true);
}
?>
